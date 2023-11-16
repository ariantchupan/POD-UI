import styled from "@emotion/styled";
import { themeColors } from "../../constants/colors";
import { Button } from "@mui/material";

export const HeaderContainer = styled("header")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 24,
  borderRadius: 10,
  backgroundColor: themeColors.card,
}));

export const UserButton = styled(Button)(() => ({
  display: "flex",
  padding: "12px 8px 12px 8px",
  height: 48,
  gap: 24,
  color: themeColors.primary,
  fontWeight: 400,
}));
