import {createSvgIcon} from "@mui/material";

const CircleIcon = createSvgIcon(
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
    </svg>,
    "Circle",
);
export default CircleIcon;
