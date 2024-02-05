import { FlexBox } from "@/components";
import { layoutMainContentMarginTop } from "@/layouts";
import { Typography } from "@mui/material";
import Lottie from "react-lottie-player";
import notFound from "@/animations/pageNotFound.json";

export default function PageNotFoundPage() {
  return (
    <FlexBox
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: `calc(100vh - ${layoutMainContentMarginTop})`,
      }}
    >
      <FlexBox flexDirection={"column"} gap={2}>
        <Lottie animationData={notFound} style={{ width: 300 }} loop play />
        <Typography
          variant="h5"
          sx={{ textAlign: "center", color: "gray.main" }}
        >
          {"Look like you're lost"}
        </Typography>
        <Typography sx={{ textAlign: "center", color: "gray.light" }}>
          {"the page you are looking for not available!"}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
