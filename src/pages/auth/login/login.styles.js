import { styled } from "@mui/material";
import { themeColors } from "../../../constants/colors";

export const LoginContainer = styled("div")(() => ({
  height: "100vh",
  width: "100wh",
  position: "relative",
  background: `url(/img/photologin.png)`,
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":before": {
    content: '""',
    position: "absolute",
    background: " rgba(37, 114, 157, 0.8)",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    zIndex: 1,
  },
}));

export const StepContainer = styled("div")(() => ({
  position: "absolute",
  top: 800,
  right: 70,
  display: "flex",
  alignItems: "center",
  gap: 4,
}));

export const StepDot = styled("span")(({ state }) => ({
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: state === "active" ? themeColors.card : themeColors.primary,
  zIndex: 4,
}));
