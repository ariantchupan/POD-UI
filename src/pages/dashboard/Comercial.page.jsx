import React from "react";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { Grid } from "@mui/material";
import DashboardHeader from "../../components/dashboard/header/Dashboard.header";
import Slider from "../../components/dashboard/slider/Slider";
import ProductCard from "../../components/shared/product/Product.card";

const ComercialPage = () => {
  return (
    <Grid container spacing="10px">
      <Grid item xs={12}>
        <Breadcrumb
          links={[
            { name: "داشبورد", path: "/dashboard" },
            { name: "بازرگانی", path: "/dashboard/commercial" },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <DashboardHeader
          action={{ name: "مشاهده لیست من", image: "/img/commercial01.png" }}
        />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        <Slider />
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
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

export default ComercialPage;
