import React, { useState } from "react";
import {
  CollapseMenuItem,
  CollapseMenuItemText,
  CollapseMenuList,
  HorizontallLine,
  SidebarMenuItemCollapse,
  VerticalLine,
} from "./sidebar.styles";
import { Stack, Collapse } from "@mui/material";
import { themeColors } from "../../constants/colors";
import ArrowIcon from "../../assets/icons/Arrow.icon";

const CollapseComponent = ({
  child,
  activePath,
  title,
  Icon,
  sidebarWidth,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SidebarMenuItemCollapse
        onClick={() => setOpen(!open)}
        sidebar={sidebarWidth === "292px" ? "open" : "close"}
      >
        <Stack direction="row" spacing={1}>
          <Icon
            width={sidebarWidth === "110px" ? "32px" : null}
            height={sidebarWidth === "110px" ? "32px" : null}
          />
          <span
            style={{
              display: sidebarWidth === "110px" ? "none" : "block",
            }}
          >
            {title}
          </span>
        </Stack>
        <ArrowIcon
          color={open ? themeColors.primary : themeColors.menu}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </SidebarMenuItemCollapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CollapseMenuList>
          {child.map(({ path, title: collapseTitle }, index) => (
            <CollapseMenuItem to={path} key={index}>
              <VerticalLine
                rank={child.length === index + 1 ? "last" : "not-last"}
              />
              <HorizontallLine
                state={activePath === path ? "active" : "deactive"}
              />
              <CollapseMenuItemText
                state={activePath === path ? "active" : "deactive"}
              >
                {collapseTitle}
              </CollapseMenuItemText>
            </CollapseMenuItem>
          ))}
        </CollapseMenuList>
      </Collapse>
    </>
  );
};

export default CollapseComponent;
