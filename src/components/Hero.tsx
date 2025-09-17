"use client";

import { Box, Typography, Button, Container } from "@mui/material";

type HeroProps = {
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
};

export default function Hero(props: HeroProps) {
    return (
        <Box
            sx={{
                position: "relative",
                color: "#fff",
                backgroundColor: props.backgroundImage ? "transparent" : "#3a3838ff",
                backgroundImage: props.backgroundImage
                    ? `url(${props.backgroundImage})`
                    : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: 25,
                textAlign: "center",
            }}
        >
            {/* Dark overlay */}
            {props.backgroundImage && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Juster 0.5 for mere/mindre mørk
                        zIndex: 0,
                    }}
                />
            )}
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    {props.title}
                </Typography>
                {props.subtitle && (
                    <Typography variant="h5" gutterBottom sx={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontWeight: '600' }}>
                        {props.subtitle}
                    </Typography>
                )}
                {props.ctaText && (
                    <Button
                        variant="contained"
                        color="primary"
                        href={props.ctaLink || "#"}
                        sx={{ mt: 3 }}
                    >
                        {props.ctaText}
                    </Button>
                )}
            </Container>
        </Box>
    );
}
