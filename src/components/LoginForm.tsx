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
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

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
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Simulate login success - redirect to token page (no backend)
    navigate("/token");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = await result.user.getIdToken(); // or credential?.accessToken
      console.log("Google login success, token:", token);
      navigate("/token");
    } catch (error: any) {
      console.error("Google login failed:", error.code, error.message);
      // You can show toast/alert here later
    }
  };

  return (
    <Box
      sx={{ width: "100%", maxWidth: "420px", mx: "auto", p: { xs: 2, sm: 1 }}}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "black",
          mb: 1,
          fontSize: {
            xs: "24px", // mobile (very small screens)
            sm: "28px", // small tablets
            md: "23px", // desktop/tablet
            lg: "34px", // larger screens (optional)
          },
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Welcome back!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "black",
          mb: 4,
          fontSize: {
            xs: "13px",
            sm: "13px",
            md: "13px",
            lg: "14px",
          },
          lineHeight: 1.6,
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Simplify your workflow and boost your productivity with Tuga's App. Get
        started for free.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderRadius: 10,
                borderColor: "black",
                "& .MuiOutlinedInput-root": {
                  color: "black",
                  paddingLeft: "15px",
                  "& fieldset": { borderColor: "black", borderRadius: 10 },
                  "&:hover fieldset": { borderColor: "rgba(0, 0, 0, 0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
                "& .MuiInputBase-input": { paddingLeft: "15px" },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(0, 0, 0, 0.7)",
                  opacity: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                },
              }}
            />
          )}
        />
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
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderColor: "black",
                borderRadius: 10,
                "& .MuiOutlinedInput-root": {
                  color: "black",
                  paddingLeft: "15px",
                  "& fieldset": { borderColor: "black", borderRadius: 10 },
                  "&:hover fieldset": { borderColor: "rgba(0, 0, 0, 0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
                "& .MuiInputBase-input": { paddingLeft: "15px" },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(0, 0, 0, 0.7)",
                  opacity: 1,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                },
              }}
            />
          )}
        />
        <Link
          href="#"
          underline="hover"
          sx={{
            display: "block",
            textAlign: "right",
            mt: 1,
            mb: 3,
            color: "rgba(0, 0, 0, 0.9)",
            fontSize: "14px",
            "&:hover": { color: "black" },
          }}
        >
          Forgot Password?
        </Link>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            bgcolor: "black",
            color: "white",
            py: 1.5,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: 10,
            fontFamily: "Poppins, sans-serif",
            mb: 3,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          Login
        </Button>
      </form>
      <Divider
        sx={{
          color: "black",
          fontSize: "14px",
          "&::before, &::after": { borderColor: "rgba(0, 0, 0, 0.3)" },
        }}
      >
        or continue with
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton
          onClick={handleGoogleLogin}
          sx={{
            bgcolor: "black",
            color: "white",
            width: 48,
            height: 48,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <GoogleIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "black",
            color: "white",
            width: 48,
            height: 48,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <AppleIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "black",
            color: "white",
            width: 48,
            height: 48,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 10,
          textAlign: "center",
          color: "black",
          fontSize: "14px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Not a member?{" "}
        <Link
          href="#"
          sx={{
            color: "#8cb85b",
            fontWeight: 500,
            textDecoration: "none",
            "&:hover": { color: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          Register now
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
