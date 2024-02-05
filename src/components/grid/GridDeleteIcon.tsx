import { CircularProgress } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { Tooltip } from '../tooltip'

type GridDeleteIconProps<TData> = {
	rowData: TData
	onDelete(): Promise<void>
}

export default function GridDeleteIcon<TData>(
	props: GridDeleteIconProps<TData>,
) {
	const [loading, setLoading] = React.useState<boolean>(false)

	const onDeleteClicked = async () => {
		setLoading(true)
		await props.onDelete()
		setLoading(false)
	}

	return loading ? (
		<CircularProgress size={21} />
	) : (
		<Tooltip title="Delete" placement="top">
			<DeleteIcon sx={{ cursor: 'pointer' }} onClick={onDeleteClicked} />
		</Tooltip>
	)
}
