import { createSvgIcon } from "@mui/material";

const BrightnessIcon = createSvgIcon(
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="200px"
    width="200px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Brightness_Down">
      <g>
        <path d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z"></path>
        <circle cx="12" cy="2.813" r="0.75"></circle>
        <circle cx="12" cy="21.187" r="0.75"></circle>
        <circle cx="21.187" cy="12" r="0.75"></circle>
        <circle cx="2.813" cy="12" r="0.75"></circle>
        <circle cx="18.496" cy="5.504" r="0.75"></circle>
        <circle cx="5.504" cy="18.496" r="0.75"></circle>
        <circle cx="18.496" cy="18.496" r="0.75"></circle>
        <circle cx="5.504" cy="5.504" r="0.75"></circle>
      </g>
    </g>
  </svg>,
  "Brightness"
);

export default BrightnessIcon;
