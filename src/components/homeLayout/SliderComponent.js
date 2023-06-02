import { Box, Button } from "@mui/material";
import React from "react";

export default function SliderComponent({ image, isButtonVisible }) {
  return (
    <Box>
       {isButtonVisible && (
        <Box
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Box style={{ margin: "0 auto", marginTop: "19%" }}>
            <Button
              variant="outlined"
              sx={{
                border: "3px solid white",
                borderRadius: "60px",
                fontSize: "1.7em",
                color: "white",
                fontWeight: "500",
                padding: "1px 35px",
                "&:hover": {
                  backgroundColor: "#111111",
                  border: "3px solid white",
                },
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      )} 
      <Box>
        <img src={image} alt="fashion" width={'100%'}/>
      </Box>
    </Box>
  );
}
