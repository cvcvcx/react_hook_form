import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CustomTextInput from "../component/CustomTextInput";
import { Link } from "react-router-dom";
import signInSchema from "../util/schemas/signInSchema";

const SignIn = () => {
  const theme = createTheme();
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data!!!!!!");
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomTextInput
                    fullWidth
                    id="email"
                    type="text"
                    label="이메일"
                    name="email"
                    control={control}
                    autoComplete="on"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextInput
                    fullWidth
                    id="password"
                    type="password"
                    label="비밀번호"
                    name="password"
                    control={control}
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                로그인
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    메인 화면으로 가기
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
