"use client"; // Sørg for at MUI kører som Client Component

import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Header navTitle="Denver Tattoo Shop" logoSrc="/eagelLogo.png" />
          <Container maxWidth="lg">{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
