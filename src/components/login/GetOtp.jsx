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
import { irMobilePattern } from "../../constants/patterns";
import axios from "axios";
import { API_URL } from "../../constants/url";
import { toastNoti } from "../../utils/toastNoti";

const GetOtp = ({ phoneNumber, setPhoneNumber, next }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!phoneNumber.trim()) {
      setError("لطفا این قسمت را خالی نگذارید");
    } else if (!irMobilePattern.test(phoneNumber)) {
      setError("فرمت شماره موبایل صحیح نیست");
    } else {
      try {
        setLoading(true);
        await axios.post(`${API_URL}/verify_phone_number`, {
          phonenumber: phoneNumber,
        });
        next();
      } catch (error) {
        // toastNoti("error", error.response.data.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
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
        disabled={loading}
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
