import { Grid } from "@/components";
import {
  DataGridProps,
  GridEventListener,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type FormGridProps<
  TData extends GridValidRowModel,
  Field extends FieldValues
> = {
  control: Control<Field>;
  name: Path<Field>;
} & Omit<DataGridProps<TData>, "rows" | "onStateChange">;

export default function FormGrid<
  TData extends GridValidRowModel,
  Field extends FieldValues
>(props: FormGridProps<TData, Field>) {
  const { control, name, ...otherProps } = props;

  function onStateChanged(_: (value: any) => void) {
    const _onStateChanged: GridEventListener<"stateChange"> = (_) => {
      // console.log(params);
    };
    return _onStateChanged;
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Grid<TData>
          rows={field.value}
          onStateChange={onStateChanged(field.onChange)}
          {...otherProps}
        />
      )}
    />
  );
}
