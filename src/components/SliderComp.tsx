"use client";
import { Card, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export type TestimonialsData = {
  quote: string;
  name: string;
  title: string;
};

type SliderCompProps = {
  testimonials: TestimonialsData[];
  title?: string;
};

export default function SliderComp({ testimonials, title }: SliderCompProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8, position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, fontWeight: 200, fontSize: { xs: 28, sm: 34, md: 40 } }}
      >
        {title || "What People Say About Us"}
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        style={{ paddingBottom: "40px" }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <Card
              sx={{
                p: 3,
                backgroundColor: "#FFF8F0",
                minHeight: 150,
              }}
            >
              <Typography sx={{ fontSize: "14px", mb: 2, fontStyle: "italic", lineHeight: 1.5 }}>
                {t.quote}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>{t.name}</Typography>
              <Typography sx={{ fontSize: "12px", color: "#666" }}>
                {t.title}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
