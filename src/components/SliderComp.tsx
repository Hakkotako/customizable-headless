"use client";
import { Card, Typography, Container, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
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
  bgPic?: string;
};

export default function SliderComp({ testimonials, title, bgPic }: SliderCompProps) {
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
        spaceBetween={30}
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
                p: 2,
                backgroundColor: "#1f7540a1",
                height: 185,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography sx={{ fontSize: "18px", mb: 2, fontStyle: "italic", lineHeight: 1.5 }}>
                {t.quote}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>{t.name}</Typography>
              <Typography sx={{ fontSize: "12px", color: "#666" }}>
                {t.title}
              </Typography>

              {bgPic && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -60,
                    right: -40,
                    pointerEvents: "none",
                    width: 200,
                    height: "auto",
                  }}
                >
                  {/* <Image
                    src={bgPic}
                    alt="Background"
                    width={200}
                    height={200}
                    style={{ width: "100%", height: "auto" }}
                  >
                  </Image> */}
                  <img src={bgPic} alt="Background" style={{ width: "100%" }} />
                </Box>
              )}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

    </Container>
  );
}
