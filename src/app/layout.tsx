"use client"; // Sørg for at MUI kører som Client Component

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {  Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          <Header navTitle="Denver Tattoo Shop" logoSrc="/eagelLogo.png"  />

          {children}

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
