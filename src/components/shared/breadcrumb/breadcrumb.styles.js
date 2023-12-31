import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  height: 48,
}));

export const BreadcrumbContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  height: 48,
}));

export const BreadcrumbItem = styled(Link)(({ color, fontWeight }) => ({
  color,
  fontWeight,
  fontSize: 16,
}));

export const ButtonContainer = styled("div")(() => ({
  marginLeft: "auto",
}));
