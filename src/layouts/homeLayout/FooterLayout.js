import { Typography, Button } from "@mui/material";
import React from "react";

export default function FooterLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#6A5ACD",
        padding: "3px",
        position:'fixed',
        width:'100%',
        bottom:'0'
      }}
    >
      <Typography sx={{ fontSize: ".6em" }}>@copyright {new Date().getFullYear()} Lakkaru</Typography>
      <Typography sx={{ fontSize: ".6em" }}>
        photo by_
        <span style={{ fontSize: "1.2em", color: "white" }}>Lakkaru</span>
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "#6A5ACD",
          fontWeight: "500",
          borderRadius: "25px",
          py:'1px',
          '&:hover':{
            backgroundColor:'#d0d0d0'
          },
        }}
      >
        Learn React
      </Button>
    </div>
  );
}
