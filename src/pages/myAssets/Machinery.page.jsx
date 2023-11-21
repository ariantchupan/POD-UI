import React from "react";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { Grid, Button } from "@mui/material";
import PlusIcon from "../../assets/icons/Plus.icon";

const MachineryPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Breadcrumb
          links={[
            { name: "دارایی های من", path: "/my-assets" },
            { name: "ماشین آلات", path: "/my-assets/machinery" },
            { name: "لیست ماشین آلات من", path: "/my-assets/machinery" },
          ]}
          button={
            <Button
              startIcon={<PlusIcon />}
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "6px", width: 179, fontSize: 14 }}
            >
              افزودن ماشین جدید
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default MachineryPage;
