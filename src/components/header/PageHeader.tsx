import Routes from "@/router/routes";
import { mainContainerSize } from "@/styles";
import { MenuOutlined } from "@mui/icons-material";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  SxProps,
  Theme,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FlexBox,
  MenuItemGenerator,
  SensorsIcon,
  Tooltip,
  UserIcon,
  VerticalBox,
} from "..";
import Logo from "../Logo";
import HeaderMenu from "./headerMenu";
import { useAppSelector } from "@/lib";

export type MenuItem = {
  title: string;
  path: Routes;
  icon: React.ReactNode;
  children?: Array<MenuItem>;
  className?: string;
  sx?: SxProps<Theme>;
};

const mainBoxStyles = {
  position: "fixed",
  top: 0,
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100vw",
  padding: "0.625rem 0rem",
  zIndex: 100,
  boxShadow: "rgba(160, 160, 160, 0.02) 0px 5px 20px",
  minHeight: "54px",
  backgroundColor: "white",
  boxSizing: "border-box",
};

const headerContainerStyles = {
  px: { xs: "0.625rem", md: 0 },
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  ...mainContainerSize,
};

const itemStyles = (
  isSelected: boolean,
  sx?: SxProps<Theme>
): SxProps<Theme> => {
  return {
    cursor: "pointer",
    position: "relative",
    padding: "4px 12px",
    borderRadius: "15px",
    backgroundColor: isSelected ? "primary.light" : "transparent",
    "& p": {
      color: isSelected ? "primary.main" : "gray.main",
    },
    "&:hover .MuiTypography-root": { color: "primary.main" },
    ...sx,
  };
};

const StyledMenuItem = styled(MenuItem)({
  paddingLeft: 0,
  paddingRight: 0,
  color: "#a7a7be",
  fontSize: "0.75rem",
  "&:hover": {
    backgroundColor: "white",
  },
  "& .MuiSvgIcon-root": {
    marginRight: "0.625rem",
    fontSize: "1.16rem",
  },
});

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, fullName } = useAppSelector((state) => {
    return { email: state.user.email, fullName: state.user.fullName };
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    { title: "Sensors", path: Routes.SENSORS, icon: <SensorsIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <FlexBox sx={mainBoxStyles}>
      <FlexBox sx={headerContainerStyles}>
        <FlexBox
          sx={{
            alignItems: "center",
            gap: { xl: 6 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xl: "none" } }}
          >
            <MenuOutlined />
          </IconButton>
          <Logo textProps={{ display: { md: "none", lg: "block" } }} />
          <FlexBox gap={1} display={{ xs: "none", xl: "flex" }}>
            {menuItems.map((item, index) => (
              <FlexBox
                key={index}
                gap={1}
                onClick={() => navigate(item.path)}
                sx={itemStyles(location.pathname === item.path, item.sx)}
              >
                <Box sx={{ display: { xs: "none", "2xl": "flex" }, gap: 1 }}>
                  {item.icon}
                  <Typography>{item.title}</Typography>
                </Box>

                <Box sx={{ display: { xs: "flex", "2xl": "none" } }}>
                  <Tooltip title={item.title}>
                    <Box display={"flex"} alignItems={"center"}>
                      {item.icon}
                    </Box>
                  </Tooltip>
                </Box>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
        <FlexBox gap={2}>
          <HeaderMenu icon={<UserIcon />}>
            <FlexBox flexDirection="column" sx={{ minWidth: "150px" }}>
              <FlexBox
                sx={{
                  padding: "0.625rem",
                  margin: ".4rem",
                  flexDirection: "column",
                  borderRadius: "4px",
                  backgroundColor: "primary.main",
                }}
              >
                <Typography color="white">{fullName}</Typography>
                <Typography
                  color="grey.300"
                  sx={{ opacity: 1 }}
                  variant="caption"
                >
                  {email}
                </Typography>
              </FlexBox>

              <FlexBox sx={{ flexDirection: "column" }}>
                <StyledMenuItem
                  sx={{ px: "0.625rem" }}
                  onClick={() => navigate("")}
                >
                  <PersonOutlineOutlinedIcon />
                  User Profile
                </StyledMenuItem>

                <StyledMenuItem
                  sx={{
                    px: "0.625rem",
                    mb: "8px",
                  }}
                  onClick={() => {
                    navigate(Routes.SIGN_IN, { replace: true });
                  }}
                >
                  <ExitToAppOutlinedIcon />
                  Exit
                </StyledMenuItem>
              </FlexBox>
            </FlexBox>
          </HeaderMenu>
        </FlexBox>
      </FlexBox>
      <Box
        sx={{
          width: { xl: 240 },
          flexShrink: { xl: 0 },
          position: "relative",
        }}
      >
        <Drawer
          className="sidebar"
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#8231d3",
            },
          }}
        >
          <VerticalBox
            height="100%"
            gap="0px !important"
            sx={{
              "& .MuiList-root > div": {
                borderRadius: 2,
              },
              "& .MuiList-root .selected-language": {
                backgroundColor: "#551199",
              },
            }}
          >
            <MenuItemGenerator
              items={menuItems}
              onItemClick={(item) => {
                navigate(item.path);
                handleDrawerToggle();
              }}
            />
          </VerticalBox>
        </Drawer>
      </Box>
    </FlexBox>
  );
}
