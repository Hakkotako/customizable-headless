"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import footerData from "@/data/footer.json";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        px: 2,
        backgroundColor: "#f5f5f5",
        textAlign: "center"
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {footerData.text}
      </Typography>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}>
        {footerData.links.map(link => (
          <Link key={link.path} href={link.path} underline="hover">
            {link.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
