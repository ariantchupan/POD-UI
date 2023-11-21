import React from "react";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  ButtonContainer,
  Container,
} from "./breadcrumb.styles";
import { themeColors } from "../../../constants/colors";
import BreadcrumbArrowIcon from "../../../assets/icons/BreadcrumbArrow.icon";

const Breadcrumb = ({ links, button }) => {
  return (
    <Container>
      {links?.map((item, index) => (
        <BreadcrumbContainer key={index}>
          <BreadcrumbItem
            to={item.path}
            color={
              links.length > 2
                ? index < 2
                  ? themeColors.breadcrumb1
                  : themeColors.breadcrumb2
                : index === 0
                ? themeColors.breadcrumb1
                : themeColors.breadcrumb2
            }
            fontWeight={
              links.length > 2
                ? index > 0
                  ? 400
                  : "bold"
                : index === 0
                ? "bold"
                : 400
            }
          >
            {item.name}
          </BreadcrumbItem>
          {index + 1 < links.length && <BreadcrumbArrowIcon />}
        </BreadcrumbContainer>
      ))}
      <ButtonContainer>{button}</ButtonContainer>
    </Container>
  );
};

export default Breadcrumb;
