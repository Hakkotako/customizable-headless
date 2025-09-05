"use client";

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";

type NavItem = { label: string; path: string };
type HeaderProps = {
  navTitle?: string;
  logoSrc?: string; // URL eller importeret billede
};

export default function Header({ navTitle, logoSrc }: HeaderProps) {
  const [navData, setNavData] = useState<NavItem[]>([]);

  useEffect(() => {
    fetch("/api/navigation")
      .then((res) => res.json())
      .then((data) => setNavData(data));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "25px" , maxHeight: 100, minHeight: 50, ml: 10, mr: 10}}>
        {logoSrc && (
          <Image
            src={logoSrc}
            alt="logo"
            width={60}
            height={60}
            style={{ marginRight: "10px", objectFit: "contain"}}
          />
        )}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
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
