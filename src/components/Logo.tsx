import Routes from "@/router/routes";
import { Typography, TypographyProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FlexBox, SmartHomeIcon } from ".";

type Props = {
  text?: string;
  noText?: boolean;
  noIcon?: boolean;
  textProps?: TypographyProps;
};

export default function Logo({
  noText,
  textProps,
  noIcon,
  text = "SecureRoom",
}: Props) {
  const navigate = useNavigate();
  return (
    <FlexBox
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={() => {
        navigate(Routes.HOME);
      }}
      gap={2}
    >
      {!noIcon && <SmartHomeIcon fontSize="large" />}
      {!noText && (
        <Typography
          fontWeight={700}
          fontSize="1.3rem"
          color="gray.main"
          {...textProps}
        >
          {text}
        </Typography>
      )}
    </FlexBox>
  );
}
