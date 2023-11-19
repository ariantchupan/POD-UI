import React from "react";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { Button, Grid } from "@mui/material";
import DashboardHeader from "../../components/dashboard/header/Dashboard.header";
import Slider from "../../components/dashboard/slider/Slider";
import ServiceBox from "../../components/dashboard/service/ServiceBox";
import ArrowIcon from "../../assets/icons/Arrow.icon";
import { themeColors } from "../../constants/colors";
import DashedDivider from "../../components/shared/dashedDivider/DashedDivider";
import ProductCard from "../../components/shared/product/Product.card";

const ServicesPage = () => {
  return (
    <Grid container spacing="10px">
      <Grid item xs={12}>
        <Breadcrumb
          links={[
            { name: "داشبورد", path: "/dashboard" },
            { name: "خدمات پاد", path: "/dashboard/services" },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <DashboardHeader
          action={{ name: "مشاهده لیست من", image: "/img/services01.png" }}
        />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        <Slider />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing="24px">
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Thru Tubing",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Coiled Tubing",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "General",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Fishing",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Milling",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Drilling",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Camp Service",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Accommodation",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Perforation",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ServiceBox
              data={{
                title: "Well Testing",
                product: "عنوان یکی از محصولات",
                products: "و ۳ مورد دیگر",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{
                width: 149,
                height: 42,
                fontSize: 14,
                fontWeight: 400,
                margin: "0px auto",
                display: "flex",
              }}
              endIcon={
                <ArrowIcon
                  width="16px"
                  height="16px"
                  color={themeColors.error}
                />
              }
              color="secondary"
            >
              مشاهده بیشتر
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <DashedDivider />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px"}}>
        <Grid container spacing="24px">
          <Grid item xs={12} md={2.4}>
            <ProductCard
              data={{
                title:
                  "عنوان محصول / خدمت قابل ارائه ... عنوان محصول / خدمت قابل ارائه",
                category: "coiled Tubing",
                rate: 3,
                image: "/img/product1.png",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ProductCard
              data={{
                title:
                  "عنوان محصول / خدمت قابل ارائه ... عنوان محصول / خدمت قابل ارائه",
                category: "coiled Tubing",
                rate: 3,
                image: "/img/product2.png",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ProductCard
              data={{
                title:
                  "عنوان محصول / خدمت قابل ارائه ... عنوان محصول / خدمت قابل ارائه",
                category: "coiled Tubing",
                rate: 3,
                image: "/img/product3.png",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ProductCard
              data={{
                title:
                  "عنوان محصول / خدمت قابل ارائه ... عنوان محصول / خدمت قابل ارائه",
                category: "coiled Tubing",
                rate: 3,
                image: "/img/product4.png",
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <ProductCard
              data={{
                title:
                  "عنوان محصول / خدمت قابل ارائه ... عنوان محصول / خدمت قابل ارائه",
                category: "coiled Tubing",
                rate: 3,
                image: "/img/product5.png",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
