"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";

type ContactField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
};

type ContactFormProps = {
  title?: string;
  fields?: ContactField[];
  submitText?: string;
  onSubmit?: (data: Record<string, string>) => void;
};

export default function ContactForm({
  title = "Contact Us",
  fields,
  submitText = "Send Message",
  onSubmit,
}: ContactFormProps) {
  const defaultFields: ContactField[] = [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: false },
    { name: "company", label: "Company", required: false },
    { name: "message", label: "Message", type: "textarea", required: true },
  ];

  const formFields = fields ?? defaultFields;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 300 }}>
          {title}
        </Typography>

        {submitted ? (
          <Typography variant="h6" align="center" sx={{ color: "green" }}>
            Thanks! Your message has been sent.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {formFields.map((field, index) => (
                <Grid
                  item
                  xs={12}
                  sm={field.name === "message" ? 12 : 6}
                  key={field.name}
                >
                  <TextField
                    name={field.name}
                    label={field.label}
                    type={field.type === "textarea" ? "text" : field.type || "text"}
                    required={field.required ?? true}
                    fullWidth
                    multiline={field.type === "textarea"}
                    rows={field.type === "textarea" ? 4 : undefined}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 3 }}>
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
