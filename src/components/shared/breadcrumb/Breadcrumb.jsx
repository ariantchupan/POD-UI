import React from "react";
import { BreadcrumbContainer, BreadcrumbItem } from "./breadcrumb.styles";
import { themeColors } from "../../../constants/colors";
import BreadcrumbArrowIcon from "../../../assets/icons/BreadcrumbArrow.icon";

const Breadcrumb = ({ links }) => {
  return (
    <BreadcrumbContainer>
      {links?.map((item, index) => (
        <BreadcrumbContainer key={index}>
          <BreadcrumbItem
            to={item.path}
            color={
              index === 0 ? themeColors.breadcrumb1 : themeColors.breadcrumb2
            }
            fontWeight={index === 0 ? "bold" : 400}
          >
            {item.name}
          </BreadcrumbItem>
          {index + 1 < links.length && <BreadcrumbArrowIcon />}
        </BreadcrumbContainer>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
