"use client";

import React from "react";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material"; // Tilføj flere ikoner her
import footerData from "@/data/footer.json";

const iconMap: Record<string, React.ReactNode> = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  Twitter: <Twitter />,
  YouTube: <YouTube />,
  // Tilføj flere sociale medier hvis du vil
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        
        py: 8,
        px: 2,
        background: "linear-gradient(135deg, #76769e 0%, #051236 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          gap={4}
        >
          {/* Adresse & kontakt */}
          <Box textAlign={{ xs: "center", md: "left" }} flex="1">
            <Typography variant="h6" gutterBottom sx={{color: "#ac9070ff"}}>
              {footerData.address.name || "MyCompany"}
            </Typography>
            <Typography variant="body2">
              {footerData.address.street}, {footerData.address.city},{" "}
            </Typography>
            <Typography variant="body2">
              {footerData.address.state} {footerData.address.zip}
            </Typography>
            <Typography variant="body2">Phone: {footerData.contact.phone}</Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link href={`mailto:${footerData.contact.email}`} color="inherit">
                {footerData.contact.email}
              </Link>
            </Typography>
          </Box>

          {/* Vigtige links */}
          <Box textAlign="center" flex="1">
            <Typography variant="h6" gutterBottom sx={{color: "#ac9070ff"}}>
              Links
            </Typography>
            {footerData.links.map((link) => (
              <Typography key={link.path}>
                <Link href={link.path} color="inherit" underline="hover">
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Sociale medier */}
          <Box textAlign={{ xs: "center", md: "right" }} flex="1">
            <Typography variant="h6" gutterBottom sx={{color: "#ac9070ff"}}>
              Follow us
            </Typography>
            {footerData.socials.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener"
                sx={{ color: "lightblue" }}
              >
                {iconMap[social.label] || null}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Footer tekst */}
        <Box mt={6} textAlign="center">
          <Typography variant="caption" color="inherit">
            {footerData.text}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
