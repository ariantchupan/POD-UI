import React, { useState } from "react";
import {
  Input,
  LoginCard,
  Logo,
  Rules,
  RulesText,
  Text,
  TextError,
  Title,
} from "./loginCard.styles";
import { Box, Button } from "@mui/material";

const GetOtp = ({ phoneNumber, setPhoneNumber, next }) => {
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (phoneNumber.trim()) {
      next();
    } else {
      setError("لطفا این قسمت را خالی نگذارید");
    }
  };

  return (
    <LoginCard>
      <Logo src="/img/second-logo.svg" alt="Pod" />
      <Title>ورود | ثبت نام</Title>
      <Text>
        سلام!
        <br />
        لطفا شماره موبایل خود را وارد کنید تا کد ارسال شود.
      </Text>
      <Box sx={{ position: "relative" }}>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={error}
        />
        <TextError>{error}</TextError>
      </Box>
      <Button
        onClick={handleSubmit}
        sx={{ width: 287, marginTop: "30px" }}
        variant="contained"
      >
        ثبت نام
      </Button>
      <RulesText>
        ورود شما به معنی پذیرش <Rules>قوانین</Rules> است.
      </RulesText>
    </LoginCard>
  );
};

export default GetOtp;
