import { DataGrid, DataGridProps, GridValidRowModel } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from ".";

type GridProps<TData extends GridValidRowModel> = {} & DataGridProps<TData>;

export default function Grid<TData extends GridValidRowModel>(
  props: GridProps<TData>
) {
  return (
    <DataGrid
      slots={{
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      sx={{
        // border: "none",
        "& .super-app-theme--header": {
          backgroundColor: "gray.surface",
        },
        // '&, [class^=MuiDataGrid]': { border: 'none' },
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
          outline: "none",
        },
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[5, 10, 20]}
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnMenu
      {...props}
    />
  );
}
