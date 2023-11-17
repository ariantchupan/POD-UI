import { styled } from "@mui/system";
import { themeColors } from "../../../constants/colors";

export const SliderItem = styled("img")(() => ({
  width: "100%",
}));

export const SliderNavigation = styled("div")(() => ({
  position: "absolute",
  top: 48,
  right: 48,
  display: "flex",
  alignItems: "center",
  gap: 8,
  zIndex: 10,
}));

export const SliderNavigationButton = styled("span")(() => ({
  display: "flex",
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: themeColors.card,
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
