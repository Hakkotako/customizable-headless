"use client";

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type NavItem = { label: string; path: string };

export default function Header({ title }: { title?: string }) {
  const [navData, setNavData] = useState<NavItem[]>([]);

  useEffect(() => {
    fetch("/api/navigation")
      .then((res) => res.json())
      .then((data) => setNavData(data));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title || "My Headless Site"}
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
