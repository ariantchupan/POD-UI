import { styled } from "@mui/material";
import { themeColors } from "../../../constants/colors";

export const ProductCardContainer = styled("div")(() => ({
  position: "relative",
  padding: 2,
  borderRadius: 16,
  backgroundColor: themeColors.card,
  boxShadow:
    "0px 12px 24px 0px rgba(0, 0, 0, 0.06),0px 0px 2px 0px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  cursor: "pointer",
  transition: "0.3s",
  ":hover": {
    opacity: 0.7,
  },
}));

export const ProductCardImageBox = styled("div")(() => ({
  position: "relative",
}));

export const ProductCardImage = styled("img")(() => ({
  width: "100%",
}));

export const ProductCardLogo = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: themeColors.card,
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.16)",
  position: "absolute",
  right: 20,
  bottom: -20,
}));

export const ProductCardBody = styled("div")(() => ({
  padding: 16,
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

export const ProductCardCategory = styled("p")(() => ({
  color: themeColors.cardSubtitle,
  fontSize: 14,
  fontWeight: 400,
}));

export const ProductCardTitle = styled("p")(() => ({
  color: themeColors.cardTitle,
  fontSize: 14,
  fontWeight: 400,
}));
