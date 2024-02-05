import Routes from "@/router/routes";
import { userSlice } from "@/store/slices";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FlexBox, FormTextField, Logo } from "@/components";
import { LoadingButton } from "@/components/button";
import { sleep, useAppDispatch } from "@/lib";
import React from "react";
import { getStorage } from "@/services";

const formStyles = {
  // mx: "auto",
  width: "350px",
  minWidth: "350px",
  flexDirection: "column",
  display: "flex",
  boxShadow: "rgba(140, 144, 164, 0.08) 0px 5px 20px",
  borderRadius: "8px",
  position: "relative",
  zIndex: 1,
};

type FormModel = {
  Email: string;
  Password: string;
};

const schema = () =>
  yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().required().min(8),
  });

export default function SignInPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<FormModel>({
    defaultValues: { Email: "", Password: "" },
    resolver: yupResolver(schema()),
  });

  const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

  const submitForm = async (formData: FormModel) => {
    setIsSigningIn(true);
    await sleep(2000);
    if (
      formData.Email === "mohammadkb79@gmail.com" &&
      formData.Password === "asdf1234"
    ) {
      dispatch(userSlice.actions.setUserEmail("mohammadkb79@gmail.com"));
      dispatch(userSlice.actions.setUserFullName("Mohammad Reza Arasteh"));
      dispatch(userSlice.actions.setUserLoginState(true));
      getStorage().setString("fullname", "Mohammad Reza Arasteh");
      getStorage().setString("email", "mohammadkb79@gmail.com");
      getStorage().setBoolean("login-status", true);
      navigate(Routes.HOME, { replace: true });
    }
    setIsSigningIn(false);
  };

  return (
    <FlexBox
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FlexBox
        sx={{
          position: "absolute",

          bottom: "-20vh",
          left: "0px",
          width: {
            xl: "min(35vw,430px)",
            lg: "40vw",
            md: "50vw",
            sm: "55vw",
          },
          height: {
            xl: "min(35vw,430px)",
            lg: "40vw",
            md: "50vw",
            sm: "55vw",
          },
          borderRadius: "90px",
          transform: "rotate(47deg) translate(-65%, 0px)",
          background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        }}
      />
      <FlexBox
        sx={{
          position: "absolute",

          top: "-22vh",
          right: "0px",
          width: {
            xl: "min(35vw,430px)",
            lg: "40vw",
            md: "50vw",
            sm: "55vw",
          },
          height: {
            xl: "min(35vw,430px)",
            lg: "40vw",
            md: "50vw",
            sm: "55vw",
          },
          borderRadius: "90px",
          transform: "rotate(32deg) translate(55%, 0px)",
          background: `linear-gradient(45deg,  ${theme.palette.primary.main},${theme.palette.primary.light})`,
        }}
      />
      <FlexBox
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
        sx={{ mx: "auto" }}
      >
        <Logo />
        <Paper sx={formStyles}>
          <FlexBox
            flexDirection={"column"}
            sx={{
              alignItems: "flex-start",
              justifyContent: "center",
              py: 3,
              px: 5,
            }}
          >
            <Typography
              sx={{ fontSize: "20px", color: "gray.main", fontWeight: "bold" }}
            >
              Sign in
            </Typography>
          </FlexBox>
          <FlexBox flexDirection={"column"} sx={{ p: 6 }} gap={4}>
            <FormTextField
              label={"Email"}
              name="Email"
              control={control}
              sx={{ mb: 3 }}
            />
            <FlexBox flexDirection={"column"} gap={3} alignItems={"flex-end"}>
              <FormTextField
                label={"Password"}
                name="Password"
                control={control}
                type="password"
                sx={{ width: "100%" }}
              />
            </FlexBox>
            <LoadingButton
              onClick={handleSubmit(submitForm)}
              color="primary"
              size="large"
              loading={isSigningIn}
            >
              Sign in
            </LoadingButton>
          </FlexBox>
        </Paper>
      </FlexBox>
    </FlexBox>
  );
}
