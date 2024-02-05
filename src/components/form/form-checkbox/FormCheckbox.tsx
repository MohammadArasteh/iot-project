import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  FormControlLabel,
  type CheckboxProps,
  Checkbox,
  FormControlLabelProps,
} from "@mui/material";

export type FormCheckboxProps<Field extends FieldValues> = {
  name: Path<Field>;
  control: Control<Field>;
  checkboxProps?: CheckboxProps;
} & Omit<FormControlLabelProps, "control">;

export default function FormCheckbox<Field extends FieldValues>({
  control,
  name,
  checkboxProps,
  ...props
}: FormCheckboxProps<Field>) {
  return (
    <FormControlLabel
      {...props}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            // const error = errors[field.name]
            return (
              <Checkbox
                {...checkboxProps}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            );
          }}
        />
      }
    />
  );
}
