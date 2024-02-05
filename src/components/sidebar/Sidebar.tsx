import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, CssBaseline, IconButton, Paper, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HorizontalBox, Logo, MenuGenerator, VerticalBox } from "..";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import menuItems, { MenuItem } from "./menuItems";
import { useNavigate } from "react-router-dom";
import { getStorage } from "@/services";
import Routes from "@/router/routes";

type Props = {
  drawerWidth?: number;
} & React.PropsWithChildren;

export default function Sidebar(props: Props) {
  const { drawerWidth = 240 } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onMenuItemClick = (_: MenuItem, route: string) => {
    navigate(route);
  };

  const onLogout = () => {
    getStorage().clearKey("fullname");
    getStorage().clearKey("email");
    getStorage().clearKey("login-status");
    navigate(Routes.SIGN_IN, { replace: true });
  };

  const drawerElement = (
    <MenuGenerator items={menuItems} onItemClick={onMenuItemClick} />
  );

  return (
    <VerticalBox height="100%" gap={"0px !important"}>
      <CssBaseline />
      <HorizontalBox
        sx={{
          backgroundColor: "#fff",
          color: "#a7a7be",
          boxShadow: "unset",
          width: "100%",
        }}
        justifyContent={"space-between"}
      >
        <HorizontalBox>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Logo />
        </HorizontalBox>
        <HorizontalBox alignItems={"center"}>
          <IconButton onClick={onLogout} sx={{ height: "fit-content" }}>
            <ExitToAppOutlinedIcon />
          </IconButton>
        </HorizontalBox>
      </HorizontalBox>
      <HorizontalBox flex={1} overflow={"hidden"}>
        <Box
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            position: "relative",
          }}
        >
          <Drawer
            container={window.document.body}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawerElement}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#fff",
                borderRight: "unset",
                position: "absolute",
              },
            }}
            open
          >
            {drawerElement}
          </Drawer>
        </Box>
        <Paper
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {props.children}
        </Paper>
      </HorizontalBox>
    </VerticalBox>
  );
}
