import { GridRenderCellParams } from '@mui/x-data-grid'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

export default function CheckboxEditableCell(
	params: GridRenderCellParams<any, boolean>,
) {
	const { id, field } = params
	return params.value ? (
		<CheckBoxIcon
			sx={{ color: 'gray.light' }}
			onClick={() => {
				params.api.setEditCellValue({ id, field, value: false })
			}}
		/>
	) : (
		<CheckBoxOutlineBlankIcon
			sx={{ color: 'primary.main' }}
			onClick={() => {
				params.api.setEditCellValue({ id, field, value: true })
			}}
		/>
	)
}
