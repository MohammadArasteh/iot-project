import { FlexBox } from "@/components";
import { pageMainStyles } from "@/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AuthorizedUsersPage() {
  const navigate = useNavigate();

  return (
    <FlexBox flexDirection={"column"} sx={pageMainStyles}>
      <FlexBox
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ px: "16px", mb: "10px" }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
          color={"gray.main"}
        >
          Authorized Users
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
