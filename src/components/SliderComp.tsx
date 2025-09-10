"use client";
import { Card, Typography, Container, Box } from "@mui/material";
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
  bgPic?: string,
  cardPic?: string;
};

export default function SliderComp({ testimonials, title, cardPic, bgPic }: SliderCompProps) {
  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}>
      {bgPic && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgPic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            opacity: 0.05, // gør billedet meget svagt
            zIndex: 0,
          }}
        />
      )}


      <Container maxWidth="lg" sx={{ py: 8, position: "relative", overflow: "hidden" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, fontWeight: 200, fontSize: { xs: 28, sm: 34, md: 40 } }}
        >
          {title || "Your title here"}
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

                {cardPic && (
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
                    src={cardPic}
                    alt="Background"
                    width={200}
                    height={200}
                    style={{ width: "100%", height: "auto" }}
                  >
                  </Image> */}
                    <img src={cardPic} alt="Background" style={{ width: "100%" }} />
                  </Box>
                )}
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </Box>
  );
}
