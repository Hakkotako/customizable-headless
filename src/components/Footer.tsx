"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import footerData from "@/data/footer.json";
import { Container, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 20,
        px: 2,
        textAlign: "center",
        background: "linear-gradient(135deg, #76769eff 0%, #051236ff 100%)",
        color: "white",
      }}
    >
      <Grid container spacing={3} sx={{color: "#EDF0F4", justifyContent: "center", gap: 15 }}>
        
        <Box sx={{display: "flex"}}>
          <Typography variant="body2" color="text.secondary">
            {footerData.text}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {footerData.links.map(link => (
            <Link key={link.path} href={link.path} underline="hover">
              {link.label}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex"}}>
          <Typography>
            Hej 
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
