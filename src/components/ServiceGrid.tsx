import { Card, CardContent, Typography, Box, Container, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BrainIcon from "@mui/icons-material/Psychology";
import { ServiceData } from "@/data/servicesDummy";

type ServicesGridProps = {
  title?: string;
  services?: ServiceData[];
};

export default function CardsGrid({ title, services = [] }: ServicesGridProps) {
  
  const icons = [
    <CodeIcon key="code" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <BrainIcon key="brain" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <BrushIcon key="brush" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />,
    <LightbulbIcon key="lightbulb" sx={{ fontSize: 40, color: "#5B3FE1", mb: 2 }} />
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 300, fontSize: { xs: 28, sm: 34, md: 45 }, color: "#3B4754" }}>
          {title}
        </Typography>

        <Grid spacing={4}>
          {services.map((service, i) => (
            <Grid key={i} xs={12} md={3}>
              <Card sx={{ height: "100%", boxShadow: 2 }}>
                <CardContent sx={{ alignContent: "center", fontSize: { xs: 28, sm: 34, md: 40 } }}>
                  {icons[i]}
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 }, color: "#666" }}>
                    {service.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}



