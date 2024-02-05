import {createSvgIcon} from "@mui/material";

const ExclamationCircleIcon = createSvgIcon(
    <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>,
    "ExclamationCircle",
);
export default ExclamationCircleIcon;
