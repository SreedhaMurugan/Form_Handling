import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  TextField, Button, Snackbar, Alert, Box, Typography 
} from "@mui/material";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setOpen(true);
    reset();
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
      }}
    >
      <Box 
        sx={{ 
          width: "400px", 
          background: "rgba(255, 255, 255, 0.2)", 
          backdropFilter: "blur(10px)", 
          borderRadius: "10px", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
          padding: "30px", 
          color: "#fff" 
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3, opacity: 0.8 }}>
          We’d love to hear from you! Please fill out the form below.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <Box sx={{ mb: 2 }}>
            <label htmlFor="name" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Your Name
            </label>
            <TextField
              id="name"
              fullWidth
              variant="outlined"
              sx={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "5px" }}
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Box>

          {/* Email Field */}
          <Box sx={{ mb: 2 }}>
            <label htmlFor="email" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Email Address
            </label>
            <TextField
              id="email"
              fullWidth
              type="email"
              variant="outlined"
              sx={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "5px" }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>

          {/* Message Field */}
          <Box sx={{ mb: 3 }}>
            <label htmlFor="message" style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Your Message
            </label>
            <TextField
              id="message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "5px" }}
              {...register("message", { required: "Message is required" })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Box>

          {/* Submit Button */}
          <Box textAlign="center">
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ 
                px: 4, 
                py: 1.5, 
                fontSize: "1rem", 
                fontWeight: "bold", 
                background: "#ff9800", 
                color: "#fff", 
                '&:hover': { background: "#e68900" }
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
