"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

type GalleryItem = {
  id: string;
  title?: string;
  description?: string;
  imageUrl: string;
  alt?: string;
  link?: string;
};

type GalleryProps = {
  items: GalleryItem[];
  columns?: number;
  showCaptions?: boolean;
  onItemClick?: (item: GalleryItem) => void;
};

export default function GalleryComponent({
  items,
  columns = 3,
  showCaptions = true,
  onItemClick,
}: GalleryProps) {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={12 / columns} key={item.id}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              height: 250,
              cursor: onItemClick ? "pointer" : "default",
              "&:hover .overlay": {
                opacity: 1,
              },
              "&:hover .image": {
                filter: "blur(4px)",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => onItemClick?.(item)}
          >
            <Box
              className="image"
              sx={{
                transition: "all 0.3s ease",
                height: "100%",
              }}
            >
              <Image
                src={item.imageUrl}
                alt={item.alt || item.title || "Gallery image"}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.6)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                textAlign: "center",
                px: 2,
              }}
            >
              {showCaptions && (
                <>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
