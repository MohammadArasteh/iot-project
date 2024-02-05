import { BrightnessIcon, FlexBox, Grid, VerticalBox } from "@/components";
import { pageMainStyles } from "@/styles";
import { Database } from "@/utility/database.types";
import supabase from "@/utility/supabase";
import { Paper, SxProps, Theme, Typography } from "@mui/material";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import React from "react";

const getStatusBadgeStyle = (status: string): SxProps<Theme> => {
  let backgroundColor = "blue.100";
  let color = "blue.800";
  switch (status) {
    case "Danger":
      backgroundColor = "#fa8b0c15";
      color = "#fa8b0c";
      break;
    case "Idle":
      backgroundColor = "#00aaff15";
      color = "#00aaff";
      break;
    default:
      backgroundColor = "grey.100";
      color = "grey.800";
  }
  return {
    backgroundColor: backgroundColor,
    color: color,
  };
};

export default function LdrRawDataListPage() {
  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 10,
    });

  const [rows, setRows] = React.useState<
    Array<Database["public"]["Tables"]["ldr"]["Row"]>
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const totalRowsRef = React.useRef<number>(0);

  const refreshGrid = React.useCallback(async () => {
    setIsLoading(true);

    const countResult = await supabase
      .from("ldr")
      .select("*", { count: "exact" });
    totalRowsRef.current = countResult.count || 0;

    const from = paginationModel.page * paginationModel.pageSize;
    const to = (paginationModel.page + 1) * paginationModel.pageSize;
    const result = await supabase.from("ldr").select("*").range(from, to);
    if (result.data) setRows(result.data);

    setIsLoading(false);
  }, [paginationModel]);

  const columnDefs = React.useMemo<
    Array<GridColDef<Database["public"]["Tables"]["ldr"]["Row"]>>
  >(
    () => [
      {
        field: "room_id",
        headerName: "Room",
        sortable: false,
        type: "string",
        headerClassName: "super-app-theme--header",
        flex: 1,
      },
      {
        field: "value",
        headerName: "Sensed Value",
        sortable: false,
        type: "string",
        headerClassName: "super-app-theme--header",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        type: "string",
        headerClassName: "super-app-theme--header",
        flex: 1,
        renderCell: (params) => (
          <Typography
            fontSize={"small"}
            sx={{
              px: "8px",
              py: "1px",
              borderRadius: "10px",
              minWidth: "50px",
              textAlign: "center",
              ...getStatusBadgeStyle(params.row.status ?? ""),
            }}
          >
            {params.value}
          </Typography>
        ),
      },
      {
        field: "created_at",
        headerName: "Reported At",
        sortable: false,
        type: "string",
        headerClassName: "super-app-theme--header",
        valueGetter: (params) =>
          `${new Date(params.value).toLocaleDateString()} ${new Date(
            params.value
          ).toLocaleTimeString()}`,
        flex: 1,
      },
    ],
    [rows]
  );

  React.useEffect(() => {
    refreshGrid();
  }, [paginationModel]);

  return (
    <FlexBox flexDirection={"column"} sx={pageMainStyles}>
      <FlexBox
        justifyContent={"flex-start"}
        alignItems={"center"}
        sx={{ px: "16px", mb: "10px" }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mr: 3 }}
          color={"gray.main"}
        >
          Sensors / LDR Sensor's Data-Table
        </Typography>
        <BrightnessIcon />
      </FlexBox>
      <VerticalBox alignItems={"center"} height="500px">
        <Paper
          sx={{
            backgroundColor: "#fff",
            p: 4,
            flex: 1,
            overflow: "auto",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid<Database["public"]["Tables"]["ldr"]["Row"]>
            columns={columnDefs}
            rows={rows}
            getRowId={(data) => data.id}
            rowCount={totalRowsRef.current}
            loading={isLoading}
            onPaginationModelChange={setPaginationModel}
            paginationModel={paginationModel}
            paginationMode="server"
          />
        </Paper>
      </VerticalBox>
    </FlexBox>
  );
}
