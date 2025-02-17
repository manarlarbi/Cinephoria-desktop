import React from "react";
import { Typography, Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        gap: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          backgroundColor: "#e91e63",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        CINE
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Playfair Display, serif",
          fontWeight: "600",
          letterSpacing: "2px",
          color: "white",
        }}
      >
        PHORIA
      </Typography>
    </Box>
  );
};

export default Logo;
