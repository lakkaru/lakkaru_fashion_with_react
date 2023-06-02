import { Typography } from "@mui/material";
import React from "react";
import HomeCarousel from "./home/HomeCarousel";
import HomeBigButtons from "./home/HomeBigButtons";
import CommonWraperLayout from "./common/CommonWraperLayout";

export default function HomeLayout() {
  return (
    <CommonWraperLayout>
      <HomeCarousel />
      <Typography sx={{ pt: 2 }}>Sri Lankan Largest Fashion center</Typography>
      <HomeBigButtons></HomeBigButtons>
    </CommonWraperLayout>
  );
}
