import React, { useEffect, useState } from "react";
import {
  Input,
  LoginCard,
  LoginWithPassword,
  Logo,
  ResendCode,
  Text,
  Title,
} from "./loginCard.styles";
import { Box, Button } from "@mui/material";

const CheckOtp = ({ otp, setOtp, next }) => {
  const [error, setError] = useState("");
  const [time, setTime] = useState(59);
  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
      if (time === 1) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async () => {
    if (otp.trim()) {
      next();
    } else {
      setError("لطفا این قسمت را خالی نگذارید");
    }
  };

  const resendCode = () => {
    setTime(59);
  };

  return (
    <LoginCard>
      <Logo src="/img/second-logo.svg" alt="Pod" />
      <Title>کد تایید را وارد کنید</Title>
      <Text style={{ marginBottom: 12 }}>
        کد تایید برای شماره ۰۹۱۲۱۲۳۴۵۶۷۸پیامک شد
      </Text>
      <Box sx={{ position: "relative" }}>
        <Input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          error={error}
        />
        <LoginWithPassword>ورود با رمز عبور</LoginWithPassword>
      </Box>
      <Button
        onClick={time > 0 ? handleSubmit : resendCode}
        sx={{ width: 287, marginTop: "30px" }}
        variant="contained"
      >
        {time > 0 ? "تایید" : "ارسال مجدد"}
      </Button>
      {time > 0 && <ResendCode>ارسال مجدد کد تا 0:{time}</ResendCode>}
    </LoginCard>
  );
};

export default CheckOtp;
