import { IconButton, Menu, SxProps, Theme } from "@mui/material";
import React, { ReactNode, useState } from "react";

const itemsStyle = {
  borderRadius: "10px",
  padding: "1px",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
};

type Props = {
  icon: ReactNode;
  children: ReactNode;
  iconStyles?: SxProps<Theme>;
};

const slotProps = {
  paper: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  },
};

export default function HeaderMenu({ icon, children, iconStyles = {} }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        disableRipple
        onClick={handleClick}
        sx={{ ...itemsStyle, ...iconStyles }}
      >
        {icon}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={slotProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{ "& .MuiList-root": { paddingTop: 0, paddingBottom: 0 } }}
      >
        {children}
      </Menu>
    </>
  );
}
