import React, { useState } from "react";
import { LoginContainer, StepContainer, StepDot } from "./login.styles";
import GetOtp from "../../../components/login/GetOtp";
import CheckOtp from "../../../components/login/CheckOtp";
import Start from "../../../components/login/Start";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(0);

  return (
    <LoginContainer>
      {step === 0 && (
        <GetOtp
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          next={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <CheckOtp otp={otp} setOtp={setOtp} next={() => setStep(2)} />
      )}
      {step === 2 && <Start />}
      <StepContainer>
        <StepDot state={step === 2 ? "active" : "deactive"} />
        <StepDot state={step === 1 ? "active" : "deactive"} />
        <StepDot state={step === 0 ? "active" : "deactive"} />
      </StepContainer>
    </LoginContainer>
  );
};

export default LoginPage;
