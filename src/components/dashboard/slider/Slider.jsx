import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  SliderItem,
  SliderNavigation,
  SliderNavigationButton,
} from "./slider.styles";
import { Box } from "@mui/material";
import { themeColors } from "../../../constants/colors";
import ArrowIcon from "../../../assets/icons/Arrow.icon";

const Slider = () => {
  return (
    <Box sx={{ position: "relative" }} className="custom-slider">
      <SliderNavigation>
        <SliderNavigationButton className="prev">
          <ArrowIcon
            width={16}
            height={16}
            color={themeColors.primary}
            style={{ transform: "rotate(270deg)" }}
          />
        </SliderNavigationButton>
        <SliderNavigationButton className="next">
          <ArrowIcon
            width={16}
            height={16}
            color={themeColors.primary}
            style={{ transform: "rotate(90deg)" }}
          />
        </SliderNavigationButton>
      </SliderNavigation>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        watchSlidesProgress={true}
        className="dashboard-slider"
      >
        <SwiperSlide>
          <SliderItem src="/img/slider.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src="/img/slider.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src="/img/slider.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src="/img/slider.png" alt="slider" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;
