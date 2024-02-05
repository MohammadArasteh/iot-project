import React from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListProps,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { MenuItem } from "./header/PageHeader";

type Props = {
  parentItem?: MenuItem;
  items: Array<MenuItem>;
  onItemClick(item: MenuItem, route: string): void;
} & ListProps;

export default function MenuItemGenerator({
  parentItem,
  items,
  onItemClick,
  ...props
}: Props) {
  const [openedLists, setOpenLists] = React.useState<Array<boolean>>([]);

  const getItemRoute = (item: MenuItem): string => {
    return parentItem ? `${parentItem.path}/${item.path}` : item.path;
  };

  return (
    <List {...props}>
      {items.map((item, index) => (
        <Box
          key={index}
          style={{ margin: "0px 10px" }}
          sx={item.sx}
          className={item.className}
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{ padding: "10px 8px" }}
              onClick={() => {
                if (!item.children) {
                  onItemClick(item, getItemRoute(item));
                }
                if (item.children) {
                  const list = [...openedLists];
                  const currentItemState = list[index];
                  list.fill(false);
                  list[index] = !currentItemState;
                  setOpenLists(list);
                }
              }}
            >
              <ListItemIcon>{item.icon ? item.icon : null}</ListItemIcon>
              <ListItemText
                primary={item.title}
                disableTypography
                className="unselectable"
              />
              {item.children ? (
                openedLists[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
          </ListItem>
          {item.children && (
            <Collapse in={openedLists[index]} timeout="auto" unmountOnExit>
              <MenuItemGenerator
                parentItem={item}
                items={item.children}
                onItemClick={onItemClick}
              />
            </Collapse>
          )}
        </Box>
      ))}
    </List>
  );
}
