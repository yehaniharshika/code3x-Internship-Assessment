import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .email("Invalid email format")
      .required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const handleGoogleLogin = async () => {
    console.log("Google login clicked");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        width: "100%",
        mx: "auto",
        p: 3,
      }}
    >
      {/* Welcome Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          fontWeight: 700,
          color: "#000000",
          mb: 1,
          fontSize: "36px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Welcome back!
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "#666666",
          mb: 4,
          fontSize: "14px",
          lineHeight: 1.6,
          textAlign: "left",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Simplify your workflow and boost your productivity with Tuga's App. Get
        started for free.
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Username"
              fullWidth
              margin="normal"
              error={!!errors.username}
              helperText={errors.username?.message}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cccccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#999999",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "14px 20px",
                  fontFamily: "Poppins, sans-serif",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999999",
                  opacity: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Password"
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cccccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#999999",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "14px 20px",
                  fontFamily: "Poppins, sans-serif",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999999",
                  opacity: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
          )}
        />

        {/* Forgot Password Link */}
        <Link
          href="#"
          underline="hover"
          sx={{
            display: "block",
            textAlign: "right",
            mt: 1,
            mb: 3,
            color: "#666666",
            fontSize: "13px",
            fontFamily: "Poppins, sans-serif",
            "&:hover": {
              color: "#000000",
            },
          }}
        >
          Forgot Password?
        </Link>

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            bgcolor: "#000000",
            color: "#ffffff",
            py: 1.5,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "25px",
            fontFamily: "Poppins, sans-serif",
            mb: 3,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              bgcolor: "#1a1a1a",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Login
        </Button>
      </form>

      {/* Divider */}
      <Divider
        sx={{
          color: "#999999",
          fontSize: "13px",
          fontFamily: "Poppins, sans-serif",
          mb: 3,
          "&::before, &::after": {
            borderColor: "#e0e0e0",
          },
        }}
      >
        or continue with
      </Divider>

      {/* Social Login Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <IconButton
          onClick={handleGoogleLogin}
          sx={{
            bgcolor: "#000000",
            color: "#ffffff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#1a1a1a",
            },
          }}
        >
          <GoogleIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#000000",
            color: "#ffffff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#1a1a1a",
            },
          }}
        >
          <AppleIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#000000",
            color: "#ffffff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#1a1a1a",
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Register Link */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#666666",
          fontSize: "14px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Not a member?{" "}
        <Link
          href="#"
          sx={{
            color: "#8BC34A",
            fontWeight: 600,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Register now
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;