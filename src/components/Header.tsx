"use client";
import { Box, Typography } from "@mui/material";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import navData from "@/data/navigation.json"; // importér direkte

type HeaderProps = {
  navTitle?: string;
  logoSrc?: string; // URL eller importeret billede
  navBgColor?: string;
};

export default function Header({ navTitle, logoSrc, navBgColor }: HeaderProps) {

  return (
    <AppBar position="fixed" sx={{ backgroundColor: navBgColor || "rgba(14, 13, 13, 0.41)", backdropFilter: "blur(1px)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "25px" , maxHeight: 100, minHeight: 50, ml: 10, mr: 10}}>
        {logoSrc && (
          <NextLink href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={logoSrc}
                alt="logo"
                width={60}
                height={60}
                style={{ marginRight: "10px", objectFit: "contain" }}
              />
            </Box>
          </NextLink>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px' }}>
          {navTitle || "Welcome"}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navData.map((item, index) => (
            <Button key={item.path} color="inherit" href={item.path}
              sx={{
                fontSize: "18px",
                fontWeight: index === navData.length - 1 ? "bold" : "normal",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
