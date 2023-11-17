import React from "react";
import { LoginCard, Logo, Text, Title } from "./loginCard.styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/");
  };

  return (
    <LoginCard>
      <Logo src="/img/second-logo.svg" alt="Pod" />
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
  );
};

export default Start;
