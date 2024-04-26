import React from "react";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2b4d99",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bottom: 0,
        margin: 0,
        left: 0,
        // width: "100%",
        marginTop: "3em" /* Diese Zeile anpassen oder entfernen */,
      }}
    >
      
      {/* Impressum Button */}
      {/* <Button variant="text" sx={{ color: "white" }}>
        Impressum
      </Button> */}
      {/* Datenschutz Button */}
      <Button variant="text" sx={{ color: "white" }}>
        Datenschutz
      </Button>
      {/* Instagram Icon */}
      <InstagramIcon
        sx={{ color: "white", cursor: "pointer" }}
        onClick={() =>
          window.open("https://www.instagram.com/tsv_bramel/", "_blank")
        }
      />
      {/* Copyright Text */}
      <Box sx={{ marginRight: "2em", color: "white" }}>
        &copy; Copyright TSV Bramel
      </Box>
    </Box>
  );
}

export default Footer;
