import styled from "@emotion/styled";
import { themeColors } from "../../../constants/colors";

export const QuickAccessContainer = styled("div")(() => ({
  padding: "16px 24px 16px 24px",
  width: "100%",
  borderRadius: 30,
  backgroundColor: themeColors.card,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow:
    "0px 0px 2px 0px rgba(0, 0, 0, 0.1), 0px 12px 24px 0px rgba(0, 0, 0, 0.06)",
  cursor: "pointer",
  transition: "0.3s",
  ":hover": {
    transform: "translateY(-4px)",
  },
}));

export const QuickAccessTextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const QuickAccessTitle = styled("h3")(() => ({
  fontSize: 28,
  fontWeight: 700,
  color: themeColors.title,
}));

export const QuickAccessSubtitle = styled("p")(() => ({
  fontSize: 14,
  fontWeight: 400,
  color: themeColors.subtitle,
}));

export const QuickAccessImage = styled("img")(() => ({
  width: 120,
  height: 120,
}));
