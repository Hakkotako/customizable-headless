"use client"; // Sørg for at MUI kører som Client Component

import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css";
import Header from "@/components/Header";

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

          <Header title="My Custom Webpage" />
          <Container maxWidth="lg">{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
