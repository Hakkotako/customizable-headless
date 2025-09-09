import { Container, Typography } from "@mui/material"

export default function Review() {
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{
                    mb: { xs: 4, sm: 6 },
                    fontWeight: 300,
                    fontSize: { xs: 28, sm: 40, md: 70 },
                    color: "#3B4754",
                }}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut esse voluptatem aliquam consectetur fugit culpa aspernatur ipsum perspiciatis quo, quos odio repellat accusantium corrupti molestias ipsa illum amet possimus veritatis.
            </Typography>
        </Container>
    )
}