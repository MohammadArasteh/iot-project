import { PageHeader } from "@/components";
import { layoutMainContentMarginTop } from "@/layouts";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = function () {
  return (
    <Box sx={{ position: "relative" }}>
      <PageHeader key={"header"} />
      <Box sx={{ mt: `${layoutMainContentMarginTop} !important` }}>
        <Outlet />
      </Box>
    </Box>
  );
};
