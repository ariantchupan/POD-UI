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
import { API_URL, BACK_END_DOMAIN } from "../../constants/url";
import axios from "axios";
import { saveToken } from "../../services/tokenService";
import { toastNoti } from "../../utils/toastNoti";

const CheckOtp = ({ otp, setOtp, next, phoneNumber }) => {
  const [error, setError] = useState("");
  const [time, setTime] = useState(59);
  const [loading, setLoading] = useState(false);
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
    if (!phoneNumber.trim()) {
      setError("لطفا این قسمت را خالی نگذارید");
    } else {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        params.append("phone_number", phoneNumber);
        params.append("verification_token", otp);
        params.append("grant_type", "phone_number_token");
        params.append("client_id", "phone_number_authentication");
        params.append("client_secret", "secret");
        const res = await axios.post(
          `${BACK_END_DOMAIN}/connect/token`,
          params
        );
        saveToken(res.data.access_token, res.data.refresh_token);
        next();
      } catch (error) {
        toastNoti("error", "شماره وارد شده صحیح نمی باشد");
      } finally {
        setLoading(false);
      }
    }
  };

  const resendCode = async () => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/verify_phone_number`, {
        phonenumber: phoneNumber,
      });
      setTime(59);
    } catch (error) {
      toastNoti("error", error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginCard>
      <Logo src="/img/second-logo.svg" alt="Pod" />
      <Title>کد تایید را وارد کنید</Title>
      <Text style={{ marginBottom: 12 }}>
        کد تایید برای شماره {phoneNumber}پیامک شد
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
        onClick={handleSubmit}
        sx={{ width: 287, marginTop: "30px" }}
        variant="contained"
        disabled={loading}
      >
        تایید
      </Button>
      {time > 0 ? (
        <ResendCode>ارسال مجدد کد تا 0:{time}</ResendCode>
      ) : (
        <Button
          onClick={resendCode}
          sx={{ width: 287, marginTop: "10px" }}
          disabled={loading}
        >
          ارسال مجدد
        </Button>
      )}
    </LoginCard>
  );
};

export default CheckOtp;
