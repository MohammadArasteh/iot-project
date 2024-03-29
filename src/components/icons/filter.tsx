import {createSvgIcon} from "@mui/material";

const FilterIcon = createSvgIcon(
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
    </svg>,
    "Filter",
);
export default FilterIcon;
