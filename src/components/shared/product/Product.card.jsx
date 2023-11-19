import React from "react";
import {
  ProductCardBody,
  ProductCardCategory,
  ProductCardContainer,
  ProductCardImage,
  ProductCardImageBox,
  ProductCardLogo,
  ProductCardTitle,
} from "./product.styles";
import { Rating } from "@mui/material";
import StarIcon from "../../../assets/icons/Star.icon";
import { themeColors } from "../../../constants/colors";

const ProductCard = ({ data }) => {
  return (
    <ProductCardContainer>
      <ProductCardImageBox>
        <ProductCardImage src={data.image} alt={data.title} />
        <ProductCardLogo>
          <img src="/img/logo-2.svg" alt="logo" width={32} height={14} />
        </ProductCardLogo>
      </ProductCardImageBox>
      <ProductCardBody>
        <ProductCardCategory>{data.category}</ProductCardCategory>
        <ProductCardTitle>{data.title}</ProductCardTitle>
        <Rating
          readOnly
          defaultValue={data.rate}
          icon={<StarIcon />}
          emptyIcon={<StarIcon color={themeColors.input} />}
        />
      </ProductCardBody>
    </ProductCardContainer>
  );
};

export default ProductCard;
