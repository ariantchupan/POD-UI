import { InputBase, styled } from "@mui/material";
import { themeColors } from "../../constants/colors";
import { Link } from "react-router-dom";

export const LoginCard = styled("div")(({ width, height }) => ({
  width: width ?? "100%",
  height: height ?? "100%",
  borderRadius: width ? 10 : 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  backgroundColor: themeColors.card,
  zIndex: 2,
  animation: "myAnim 2s ease 0s 1 normal forwards",
  "@media(min-width:900px)": {
    width: 609,
    height: 708,
    borderRadius: 10,
  },
  "@keyframes myAnim": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export const Logo = styled("img")(({ mt, desktopDisplay }) => ({
  width: 134,
  height: 58,
  marginTop: 150,
  "@media(max-width:900px)": {
    marginTop: mt ?? 150,
  },
  "@media(min-width:900px)": {
    display: desktopDisplay ?? "initial",
  },
}));

export const Title = styled("h3")(() => ({
  color: themeColors.title,
  fontWeight: 700,
  fontSize: 17,
  marginTop: 60,
}));

export const Text = styled("p")(() => ({
  fontSize: 14,
  fontWeight: 400,
  textAlign: "center",
  color: themeColors.text,
  lineHeight: "19.14px",
  marginTop: 12,
}));

export const Input = styled(InputBase)(({ error }) => ({
  width: 287,
  height: 40,
  backgroundColor: themeColors.input,
  borderRadius: 10,
  marginTop: 20,
  paddingInline: 8,
  border: error.trim()
    ? `1px solid ${themeColors.error}`
    : "1px solid transparent",
}));

export const TextError = styled("span")(() => ({
  position: "absolute",
  left: 0,
  bottom: -18,
  color: themeColors.error,
  fontSize: 8,
  fontWeight: 400,
}));

export const LoginWithPassword = styled(Link)(() => ({
  position: "absolute",
  left: 0,
  bottom: -18,
  color: themeColors.link,
  fontSize: 8,
  fontWeight: 400,
}));

export const RulesText = styled("p")(() => ({
  fontWeight: 400,
  fontSize: 12,
  textAlign: "center",
  color: themeColors.title,
  marginTop: 15,
}));

export const Rules = styled("span")(() => ({
  textDecoration: "underline",
  color: themeColors.error,
  cursor: "pointer",
}));

export const ResendCode = styled("span")(() => ({
  fontSize: 11,
  color: "#909090",
  fontWeight: 400,
  marginTop: 12,
  textAlign: "center",
}));
