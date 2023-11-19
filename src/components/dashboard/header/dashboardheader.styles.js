import { InputBase, styled } from "@mui/material";
import { themeColors } from "../../../constants/colors";

export const DashboardHeaderContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
}));

export const SearchBox = styled("div")(() => ({
  width: 450,
  height: 42,
  borderRadius: 6,
  border: `1px solid ${themeColors.border}`,
  display: "flex",
  alignItems: "center",
  paddingInline: 8,
}));

export const SearchInput = styled(InputBase)(() => ({
  height: "100%",
  flex: 1,
  ":placeholder": {
    color: themeColors.placeholder,
    fontWeight: 200,
  },
}));

export const DashboardHeaderAction = styled("button")(() => ({
  width: 292,
  height: 72,
  borderRadius: 14,
  background: "rgba(229, 245, 255, 0.5)",
  display: "flex",
  alignItems: "center",
  color: themeColors.primary,
  fontSize: 16,
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
  position: "relative",
  paddingLeft: 16,
  transition: "0.3s",
  ":hover": {
    boxShadow: "0px 5px 20px rgba(120,120,120,0.2)",
  },
}));

export const DashboardImageAction = styled("img")(() => ({
  position: "absolute",
  right: 16,
  bottom: 0,
  width: 114,
  height: 106,
}));
