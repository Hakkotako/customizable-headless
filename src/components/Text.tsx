import { Container, Typography, Box, Button } from "@mui/material"

export default function Text() {
    return (
        <Container sx={{padding: 6}}>
            <Typography
                variant="h4"
                sx={{
                
                    fontWeight: 300,
                    fontSize: { xs: 28, sm: 40, md: 70 },
                    color: "#3B4754",
                    textAlign: "center",
                    pb: 4
                }}
            >
                We draw your dreams
            </Typography>
            <Typography sx={{fontWeight: "bold", fontSize: 25, pb: 2, color: "#3B4754"}}>
                More than 20 years of passion 
            </Typography>
            <Typography sx={{fontSize: 18, color: "#3B4754", pb: 4}}>
                At <Box component="span" fontWeight="bold" color="#46709cff">Denver Tattoo Studio</Box> we believe that a tattoo is more than just ink on skin; it&apos;s a form of self-expression, a piece of art that tells your unique story. With over 20 years of experience in the tattoo industry, our team of skilled artists is dedicated to bringing your vision to life with precision and creativity.
            </Typography>
             <Typography sx={{fontWeight: "bold", fontSize: 25, pb: 2, color: "#3B4754"}}>
                Over 10,000 satisfied clients 
            </Typography>
            <Typography sx={{fontSize: 18, color: "#3B4754",  pb: 4}}>
                For us, <Box component="a" href="/about" fontWeight="bold" color="#46709cff">tattoos</Box> are not just about the art; they&apos;re about the experience. We take pride in our commitment to customer satisfaction, ensuring that every client leaves our studio not only with a beautiful tattoo but also with a memorable experience. Our friendly and professional staff are here to guide you through every step of the process, from consultation to aftercare.
            </Typography>
            <Box gap={2} sx={{display: "flex", justifyContent: "center"}}>
                <Button href="/service" style={{backgroundColor: "#46709cff", color: "#fff"}}>Gallery</Button>
                <Button href="/contact" style={{backgroundColor: "#46709cff", color: "#fff"}}>Contact</Button>
                <Button href="/contact" style={{backgroundColor: "#46709cff", color: "#fff"}}>Book Now</Button>
            </Box>
        </Container>
    )
}