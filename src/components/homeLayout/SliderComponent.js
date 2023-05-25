import { Button } from "@mui/material";
import React from "react";

export default function SliderComponent({ image, isButtonVisible }) {
  return (
    <div style={{}}>
        {isButtonVisible&& <div
        style={{
          position: "absolute",
          //   display: "flex",
          width: "100%",
          // height:'80vh',
          //   backgroundColor: "red",
        }}
      >
        <div style={{ margin: "0 auto", marginTop: "19%" }}>
          <Button
            variant="outlined"
            sx={{
              border: "3px solid white",
              borderRadius: "60px",
              fontSize: "1.7em",
              color: "white",
              fontWeight: "500",
              padding: "1px 35px",
              '&:hover':{
                backgroundColor:"#111111",
                border: "3px solid white"
              }
            }}
          >
            SHOP NOW
          </Button>
        </div>
      </div>}
      
      <img src={image} alt="fashion" width={"100%"} />
    </div>
  );
}
