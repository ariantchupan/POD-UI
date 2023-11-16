import { styled } from "@mui/material";
import { themeColors } from "../../constants/colors";
import { Link } from "react-router-dom";

export const SidebarContainer = styled("aside")(() => ({
  width: "100%",
  padding: "24px 0px",
  borderRadius: 12,
  backgroundColor: themeColors.card,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  position: "relative",
  minHeight: "100vh",
}));

export const SidebarToggle = styled("span")(({ state }) => ({
  position: "absolute",
  zIndex: 2,
  top: state === "close" ? 24 : 48,
  right: state === "close" ? 31 : "-12px",
  display: "flex",
  width: 48,
  height: 48,
  backgroundColor: themeColors.card,
  borderRadius: 6,
  boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.16)",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.3s",
  transform: state === "close" ? "rotate(180deg)" : "rotate(0deg)",
}));

export const SidebarMenuList = styled("div")(({ sidebar }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: sidebar === "open" ? 24 : 70,
  overflow: "hidden",
  width: sidebar === "close" ? 80 : "100%",
  marginInline: "auto",
}));

export const SidebarMenuItem = styled(Link)(({ state, sidebar }) => ({
  display: "flex",
  alignItems: "center",
  height: sidebar === "close" ? 80 : 48,
  width: "100%",
  justifyContent: "space-between",
  color: state === "active" ? themeColors.primary : themeColors.menu,
  backgroundColor:
    state === "active" && sidebar === "close"
      ? themeColors.primary
      : "transparent",
  borderLeft:
    state === "active"
      ? `2px solid ${themeColors.primary}`
      : `2px solid ${themeColors.card}`,
  transition: "0.3s",
  padding: "0px 24px",
  borderRadius: sidebar === "close" ? 6 : 0,
}));

export const SidebarMenuItemCollapse = styled("div")(({ state, sidebar }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: sidebar === "close" ? 80 : 48,
  width: "100%",
  color: state === "active" ? themeColors.primary : themeColors.menu,
  backgroundColor:
    state === "active" && sidebar === "close"
      ? themeColors.primary
      : "transparent",
  borderLeft:
    state === "active"
      ? `2px solid ${themeColors.primary}`
      : `2px solid ${themeColors.card}`,
  transition: "0.3s",
  padding: "0px 24px",
  borderRadius: sidebar === "close" ? 6 : 0,
  cursor: "pointer",
}));

export const CollapseMenuList = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const CollapseMenuItem = styled(Link)(() => ({
  display: "flex",
  width: "100%",
  height: 32,
  padding: "0px 36px 0px 24px",
  alignItems: "center",
}));

export const VerticalLine = styled("span")(({ rank }) => ({
  display: "inline-block",
  height: rank === "last" ? "50%" : "100%",
  width: 1,
  backgroundColor: themeColors.border,
  alignSelf: "self-start",
  transition: "0.3s",
}));

export const HorizontallLine = styled("span")(({ state }) => ({
  display: "inline-block",
  height: 1,
  width: state === "active" ? 16 : 8,
  backgroundColor: themeColors.border,
  transition: "0.3s",
}));

export const CollapseMenuItemText = styled("p")(({ state }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: state === "active" ? themeColors.primary : themeColors.menu,
  paddingInline: 8,
  transition: "0.3s",
}));
