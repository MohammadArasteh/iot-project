import Routes from "@/router/routes";
import React from "react";

export type MenuItem = {
  title: string;
  route: Routes;
  icon?: React.ReactNode;
  children?: Array<MenuItem>;
};

const items: Array<MenuItem> = [];

export default items;
