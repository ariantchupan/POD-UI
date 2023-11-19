import { styled } from "@mui/material";
import { themeColors } from "../../../constants/colors";

export const ServiceBoxContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "14px 24px 14px 24px",
  backgroundColor: themeColors.card,
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.16)",
  transition: "0.3s",
  borderRadius: 6,
  cursor: "pointer",
  ":hover": {
    backgroundColor: themeColors.page,
  },
}));

export const ServiceBoxTitle = styled("h3")(() => ({
  color: themeColors.cardTitle,
  fontWeight: 400,
  fontSize: 16,
}));

export const ServiceBoxSubtitle = styled("p")(({ color }) => ({
  fontSize: 14,
  fontWeight: 400,
  color,
}));
