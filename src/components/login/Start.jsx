import React from "react";
import { LoginCard, Logo, Text, Title } from "./loginCard.styles";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeColors } from "../../constants/colors";

const Start = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          background: themeColors.primary,
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          bottom: 0,
          opacity: "90%",
          zIndex: 2,
          display: { xs: "block", md: "none" },
        }}
      ></Box>
      <Logo
        src="/img/logo-2.svg"
        alt="Pod"
        style={{
          position: "absolute",
          top: -80,
          zIndex: 1,
        }}
        desktopDisplay="none"
      />
      <LoginCard width="311px" height="368px">
        <Logo src="/img/second-logo.svg" alt="Pod" mt={80} />
        <Title style={{ marginTop: 30 }}>تبریک میگم :)</Title>
        <Text style={{ marginTop: 20 }}>
          از این به بعد همه کار های روزمرتو میتونی <br /> به راحتی انجام بدی
        </Text>
        <Button
          onClick={handleSubmit}
          sx={{ width: 287, marginTop: "30px" }}
          variant="contained"
        >
          شروع
        </Button>
      </LoginCard>
    </>
  );
};

export default Start;
