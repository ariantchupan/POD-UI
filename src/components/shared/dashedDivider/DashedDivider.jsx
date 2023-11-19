import { Box } from "@mui/material";
import React from "react";
import { themeColors } from "../../../constants/colors";

const DashedDivider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        borderTop: `1px dashed ${themeColors.border}`,
      }}
    ></Box>
  );
};

export default DashedDivider;
