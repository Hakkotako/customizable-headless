"use client";

import { Box, Container, Typography, Button } from "@mui/material";

type PageTemplateProps = {
    pageTitle?: string;              // Side-titel (valgfri)
    heroTitle?: string;              // Titel i Hero
    heroSubtitle?: string;           // Subtitle i Hero
    heroCtaText?: string;            // CTA-knap tekst
    heroCtaLink?: string;            // CTA-knap link
    heroBgColor?: string;            // Baggrundsfarve hvis ingen billede
    heroBgImg?: string;              // Baggrundsbillede
    components?: React.ReactNode[];  // Andre komponenter på siden
};

export default function PageTemplate({
    pageTitle,
    heroTitle,
    heroSubtitle,
    heroCtaText,
    heroCtaLink,
    heroBgColor = "linear-gradient(135deg, #3a3838 0%, #5b3fe1 100%)",
    heroBgImg,
    components = [],
}: PageTemplateProps) {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
            {/* Hero Section */}
            {(heroTitle || heroSubtitle) && (
                <Box
                    sx={{
                        background: heroBgImg
                            ? `url(${heroBgImg}) center/cover no-repeat`
                            : heroBgColor,
                        minHeight: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        color: "#fff",
                        position: "relative",
                        overflow: "hidden",
                        px: 2,
                    }}
                >
                    {heroTitle && (
                        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                            {heroTitle}
                        </Typography>
                    )}
                    {heroSubtitle && (
                        <Typography variant="h5" sx={{ mb: 4 }}>
                            {heroSubtitle}
                        </Typography>
                    )}
                    {heroCtaText && (
                        <Button
                            variant="contained"
                            color="primary"
                            href={heroCtaLink || "#"}
                        >
                            {heroCtaText}
                        </Button>
                    )}
                </Box>
            )}

            {/* Optional page title */}
            {pageTitle && (
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Typography variant="h4">{pageTitle}</Typography>
                </Container>
            )}

            {/* Other components */}
            {components.map((Component, i) => (
                <Box key={i} sx={{ mb: 6 }}>
                    {Component}
                </Box>
            ))}
        </Box>
    );
}
