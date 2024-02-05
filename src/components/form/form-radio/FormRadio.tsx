import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import React from "react";

type FormRadioProps<Field extends FieldValues> = {
  control: Control<Field>;
  name: Path<Field>;
  children: React.ReactNode;
  label?: string;
} & RadioGroupProps;

export default function FormRadio<T extends FieldValues>(
  props: FormRadioProps<T>
) {
  const { children, name, control } = props;

  const id = React.useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        // const error = errors[field.name]
        return (
          <FormControl>
            {props.label && <FormLabel id={id}>{props.label}</FormLabel>}
            <RadioGroup {...props} {...field} aria-labelledby={id}>
              {children}
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
}

/**
 * https://github.com/mui/material-ui/issues/38481
 * use FormControlLabel directly in <FormRadio/> children until above issue gets fixed
 */
type FormRadioOptionProps<V extends {}> = {
  value: V;
  label: string;
};
FormRadio.Option = function Option<V extends {}>(
  props: FormRadioOptionProps<V>
) {
  const { value, label } = props;
  return <FormControlLabel value={value} control={<Radio />} label={label} />;
};
