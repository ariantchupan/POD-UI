import styled from "@emotion/styled";
import { themeColors } from "../constants/colors";

export const LayoutContainer = styled("div")(() => ({
  padding: 24,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: 24,
  backgroundColor: themeColors.page,
  minHeight: "100vh",
}));

export const PageContainer = styled("div")(({ sidebarWidth }) => ({
  display: "grid",
  gap: 24,
  gridTemplateColumns: `${sidebarWidth} calc(100% - 24px - ${sidebarWidth})`,
  transition: "0.3s",
}));

export const Page = styled("div")(() => ({
  padding: 24,
  backgroundColor: themeColors.card,
  borderRadius: 10,
  boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.08)",
}));
