"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

type ContactField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};

type ContactFormProps = {
  title?: string;
  fields: ContactField[];
  submitText?: string;
  onSubmit?: (data: Record<string, string>) => void;
};

export default function ContactForm({
  title = "Contact Us",
  fields,
  submitText = "Send Message",
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          {title}
        </Typography>

        {submitted ? (
          <Typography variant="h6" align="center" sx={{ color: "green" }}>
            Thanks! Your message has been sent.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <TextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type || "text"}
                required={field.required ?? true}
                fullWidth
                sx={{ mb: 3 }}
                onChange={handleChange}
              />
            ))}

            <Box sx={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                {submitText}
              </Button>
            </Box>
          </form>
        )}
      </Container>
    </Box>
  );
}
