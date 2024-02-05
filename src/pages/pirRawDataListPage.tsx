import { BrightnessIcon, FlexBox, Grid, VerticalBox } from "@/components";
import { pageMainStyles } from "@/styles";
import { Database } from "@/utility/database.types";
import supabase from "@/utility/supabase";
import { Paper, Typography } from "@mui/material";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import React from "react";

export default function PirRawDataListPage() {
  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 10,
    });

  const [rows, setRows] = React.useState<
    Array<Database["public"]["Tables"]["pir"]["Row"]>
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const totalRowsRef = React.useRef<number>(0);

  const refreshGrid = React.useCallback(async () => {
    setIsLoading(true);

    const countResult = await supabase
      .from("pir")
      .select("*", { count: "exact" });
    totalRowsRef.current = countResult.count || 0;

    const from = paginationModel.page * paginationModel.pageSize;
    const to = (paginationModel.page + 1) * paginationModel.pageSize;
    const result = await supabase.from("pir").select("*").range(from, to);
    if (result.data) setRows(result.data);

    setIsLoading(false);
  }, [paginationModel]);

  const columnDefs = React.useMemo<
    Array<GridColDef<Database["public"]["Tables"]["pir"]["Row"]>>
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
        field: "created_at",
        headerName: "Motion Detection Time",
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
          Sensors / PIR Sensor's Data-Table
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
          <Grid<Database["public"]["Tables"]["pir"]["Row"]>
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
