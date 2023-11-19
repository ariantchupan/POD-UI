import React from "react";
import {
  ServiceBoxContainer,
  ServiceBoxSubtitle,
  ServiceBoxTitle,
} from "./serviceBox.styles";
import { Stack } from "@mui/material";
import { themeColors } from "../../../constants/colors";

const ServiceBox = ({ data }) => {
  return (
    <ServiceBoxContainer>
      <ServiceBoxTitle>{data.title}</ServiceBoxTitle>
      <Stack direction="row" spacing={1}>
        <ServiceBoxSubtitle color={themeColors.cardSubtitle}>
          {data.product}
        </ServiceBoxSubtitle>
        <ServiceBoxSubtitle color={themeColors.primary}>
          {data.products}
        </ServiceBoxSubtitle>
      </Stack>
    </ServiceBoxContainer>
  );
};

export default ServiceBox;
