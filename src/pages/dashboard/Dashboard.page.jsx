import React from "react";
import Slider from "../../components/dashboard/slider/Slider";
import { Grid } from "@mui/material";
import QuickAccess from "../../components/dashboard/quickAccess/QuickAccess";

const Dashboard = () => {
  return (
    <Grid container spacing="24px">
      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item xs={12} md={6}>
        <QuickAccess
          title="خدمات"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          path="/dashboard/services"
          image="/img/services.png"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <QuickAccess
          title="بازرگانی"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
          path="/dashboard/comercial"
          image="/img/comercial.png"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <QuickAccess
          title="منابع انسانی"
          subtitle="لورم ایپسوم متن ساختگی"
          path="/hr"
          image="/img/hr.png"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <QuickAccess
          title="HSEQ"
          subtitle="لورم ایپسوم متن ساختگی"
          path="/hseq"
          image="/img/HSEQ.png"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <QuickAccess
          title="مناقصات"
          subtitle="لورم ایپسوم متن ساختگی"
          path="/tenders"
          image="/img/mon.png"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <QuickAccess
          title="اخبـــار"
          subtitle="لورم ایپسوم متن ساختگی"
          path="/news"
          image="/img/news.png"
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
