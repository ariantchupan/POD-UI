import React from "react";
import {
  QuickAccessContainer,
  QuickAccessImage,
  QuickAccessSubtitle,
  QuickAccessTextContainer,
  QuickAccessTitle,
} from "./quickAccess.styles";
import { useNavigate } from "react-router-dom";

const QuickAccess = ({ title, subtitle, image, path }) => {
  const navigate = useNavigate();

  return (
    <QuickAccessContainer onClick={() => navigate(path)}>
      <QuickAccessTextContainer>
        <QuickAccessTitle>{title}</QuickAccessTitle>
        <QuickAccessSubtitle>{subtitle}</QuickAccessSubtitle>
      </QuickAccessTextContainer>
      <QuickAccessImage src={image} alt={title} />
    </QuickAccessContainer>
  );
};

export default QuickAccess;
