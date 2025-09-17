"use client";

import { Box, Container, Typography, Button } from "@mui/material";

type PageTemplateProps = {
    pageTitle?: string;              // Page-titel (valgfri)
    heroTitle?: string;              // Titel for Hero
    heroSubtitle?: string;           // Subtitle for Hero
    heroCtaText?: string;            // CTA-Button text
    heroCtaLink?: string;            // CTA-Button link
    heroBgColor?: string;            // Background color for Hero
    heroBgImg?: string;              // Background image for Hero
    components?: React.ReactNode[];  // Other components on the page
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
            <Container maxWidth="lg" sx={{ py: 8 }}>
                {components.map((Component, i) => (
                    <Box key={i} sx={{ mb: 6 }}>
                        {Component}
                    </Box>
                ))}
            </Container>
        </Box>
    );
}
