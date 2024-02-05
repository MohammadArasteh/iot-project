import { debounce } from "@/lib/utility-functions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
  TextField,
  TextFieldProps,
  CircularProgress,
  Autocomplete as MuiAutocomplete,
  Paper,
  Typography,
  AutocompleteInputChangeReason,
} from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";

export type AutocompleteProps<TData> = {
  textfieldProps?: TextFieldProps;
  getData: (value: string) => Promise<Array<TData>>;
  optionCreator?: (value: string) => TData;
  onValueChange?: (value: TData | null) => void;
  delay?: number;
  pageSize?: number;
  canSelect?(value: TData): Promise<boolean>;
  getOptionKey?(value: TData): string;
  isEmptyOption?(value: TData | null): boolean;
} & Omit<
  MuiAutocompleteProps<TData, boolean, boolean, boolean>,
  "options" | "renderInput"
>;

export default function Autocomplete<TData>({
  multiple = false,
  selectOnFocus = false,
  blurOnSelect = true,
  closeText = "Close",
  openText = "Show",
  loadingText = "Loading...",
  noOptionsText = "Nothing found",
  delay = 700,
  pageSize = 10,
  textfieldProps,
  getData,
  value,
  onValueChange,
  optionCreator,
  canSelect,
  getOptionKey,
  isEmptyOption,
  ...props
}: AutocompleteProps<TData>) {
  const [options, setOptions] = React.useState<Array<TData>>([]);
  const firstOptions = React.useRef<Array<TData>>([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [visibleHeader, setVisibleHeader] = React.useState(false);

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField {...params} {...textfieldProps} />
  );
  const popupIcon = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ExpandMoreIcon />
      {props.loading && (
        <CircularProgress
          color="primary"
          size={16}
          style={{ marginRight: ".5rem" }}
        />
      )}
    </div>
  );

  const getOptions = debounce(async (value: string) => {
    if (!props.disabled) {
      setLoading(true);
      const data = await getData(value);
      console.log({ data });
      setLoading(false);
      if (data) {
        if (data.length && !value) firstOptions.current = data;
        setOptions(data);
        setVisibleHeader(data.length >= pageSize);
      }
    }
  }, delay);

  const onOpen = React.useCallback(() => {
    setOpen(true);
    if (!firstOptions.current.length) getOptions("");
    else setOptions(firstOptions.current);
  }, [getOptions]);

  const headerElement = ({ children, ...other }: any) => (
    <Paper {...other}>
      <Typography
        style={{ fontSize: ".8rem", marginRight: 14, marginTop: 4 }}
        variant="subtitle1"
        color="error"
      >
        To display the desired results, make the search condition more exclusive
      </Typography>
      {children}
    </Paper>
  );

  const onInputChange = (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === "input") {
      getOptions(value);
      if (optionCreator) {
        if (value) {
          const option = optionCreator(value);
          if (onValueChange) onValueChange(option);
        } else if (onValueChange) onValueChange(null);
      }
    }
    props.onInputChange && props.onInputChange(event, value, reason);
  };

  const isOptionEqualToValue = React.useCallback(
    (option: TData, value: TData) =>
      getOptionKey
        ? getOptionKey(option) === getOptionKey(value)
        : props.getOptionLabel
        ? props.getOptionLabel(option) === props.getOptionLabel(value)
        : false,
    [props]
  );

  const filterOptions = React.useCallback(() => {
    return options;
  }, [options]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onChange = React.useCallback(
    async (
      _: React.SyntheticEvent,
      value: TData | NonNullable<string | TData> | Array<string | TData> | null
    ) => {
      if (canSelect && value) {
        const result = await canSelect(value as TData);
        if (result) return;
      }
      onValueChange && onValueChange(value as TData);
    },
    [onValueChange]
  );

  const renderOption = React.useCallback(
    (renderProps: React.HTMLAttributes<HTMLLIElement>, option: TData) => (
      <li
        {...renderProps}
        key={
          getOptionKey
            ? getOptionKey(option as TData)
            : props.getOptionLabel
            ? props.getOptionLabel(option as TData)
            : uuid()
        }
      >
        {props.getOptionLabel ? props.getOptionLabel(option as TData) : null}
      </li>
    ),
    []
  );

  const selectedValue = isEmptyOption
    ? isEmptyOption(value as TData | null)
      ? null
      : value
    : value;

  return (
    <MuiAutocomplete
      {...props}
      value={selectedValue}
      open={open}
      onOpen={onOpen}
      filterOptions={filterOptions}
      options={options}
      freeSolo={!!optionCreator}
      forcePopupIcon={!props.disabled}
      popupIcon={popupIcon}
      disableClearable={props.disableClearable || props.disabled}
      onInputChange={onInputChange}
      isOptionEqualToValue={isOptionEqualToValue}
      onClose={onClose}
      renderInput={renderInput}
      PaperComponent={visibleHeader ? headerElement : undefined}
      loading={loading}
      onChange={onChange}
      multiple={multiple}
      selectOnFocus={selectOnFocus}
      blurOnSelect={blurOnSelect}
      closeText={closeText}
      openText={openText}
      loadingText={loadingText}
      noOptionsText={noOptionsText}
      renderOption={renderOption}
    />
  );
}
