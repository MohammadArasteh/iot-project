import {
  BrightnessIcon,
  FlexBox,
  HumidityIcon,
  MotionIcon,
  RfIdIcon,
  TemperatureIcon,
} from "@/components";
import { pageMainStyles } from "@/styles";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SensorsList() {
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
          Sensors
        </Typography>
      </FlexBox>
      <FlexBox gap={5} flexWrap={"wrap"}>
        {[
          {
            sensorName: "LDR",
            route: "sensors/ldr-raw-data",
            icon: <BrightnessIcon fontSize="large" />,
          },
          {
            sensorName: "PIR",
            route: "sensors/pir-raw-data",
            icon: <MotionIcon fontSize="large" />,
          },
          {
            sensorName: "Humidity",
            route: "sensors/humidity-raw-data",
            icon: <HumidityIcon fontSize="large" />,
          },
          {
            sensorName: "Temperature",
            route: "sensors/temperature-raw-data",
            icon: <TemperatureIcon fontSize="large" />,
          },
          {
            sensorName: "RFID",
            route: "sensors/rfid-raw-data",
            icon: <RfIdIcon fontSize="large" />,
          },
        ].map((i) => (
          <Box
            sx={{
              backgroundColor: "#2d3436",
              color: "#a7a7a7",
              borderRadius: "8px",
              minWidth: "200px",
              height: "325px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              cursor: "pointer",
              transition: "0.6s",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                color: "white",
                "& > p": {
                  color: "white",
                  fontSize: "1.05rem",
                },
              },
            }}
            onClick={() => navigate(i.route)}
          >
            {i.icon}
            <Typography
              sx={{
                transition: "0.6s",
                color: "#a7a7a7",
                fontSize: "1rem",
              }}
            >
              {i.sensorName}
            </Typography>
          </Box>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
