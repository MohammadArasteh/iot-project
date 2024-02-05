import { GridRenderCellParams } from "@mui/x-data-grid";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function CheckboxCellRenderer(
  params: GridRenderCellParams<any, boolean>
) {
  return params.value ? (
    <CheckBoxIcon sx={{ color: "primary.main" }} />
  ) : (
    <CheckBoxOutlineBlankIcon sx={{ color: "gray.light" }} />
  );
}
