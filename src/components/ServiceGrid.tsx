"use client";
import { Card, CardContent, Typography, Box, Container, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BrainIcon from "@mui/icons-material/Psychology";
import DrawIcon from '@mui/icons-material/Draw';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

type ServiceItem = {
  title: string;
  text: string[];
};
type ServicesGridProps = {
  title?: string;
  services?: ServiceItem[];
};

export default function CardsGrid({ title, services = [] }: ServicesGridProps) {

  const icons = [
    <DrawIcon key="code" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <BrainIcon key="brain" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <SupportAgentIcon key="brush" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <LightbulbIcon key="lightbulb" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 300,
            fontSize: { xs: 28, sm: 34, md: 45 },
            color: "#3B4754",
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={4} justifyContent="center" // <-- centrerer alle kort
        >
          {services.map((service, i) => (
            <Grid key={i}
              item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }} 
            >
              <Card sx={{ height: "100%", boxShadow: 2, width: "100%", maxWidth: 300 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  {icons[i]}
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>

                  {service.text.map((line, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 16 },
                        color: "#666",
                        mb: 0.5,
                      }}
                    >
                      • {line}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

  );
}



