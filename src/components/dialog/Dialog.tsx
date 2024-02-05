import Box from '@mui/material/Box'
import {
	Dialog as MuiDialog,
	DialogContent,
	DialogActions,
	DialogTitle,
	DialogProps,
} from '@mui/material'
import React from 'react'

interface IDialogProps {
	open: boolean
	children: React.ReactNode
	title?: string
	dialogProps?: Omit<DialogProps, 'onClose' | 'open'>
	onClose(): void
	renderActions?(): React.ReactNode
}

export default function Dialog(props: IDialogProps) {
	const { children, title, open, onClose, ...restProps } = props
	return (
		<MuiDialog open={open} onClose={onClose} {...restProps.dialogProps}>
			{title && (
				<DialogTitle fontWeight="bold" fontSize={24}>
					{title}
				</DialogTitle>
			)}
			<DialogContent>{children}</DialogContent>
			{restProps.renderActions && (
				<DialogActions sx={{ p: 2 }}>
					<Box display={'flex'} alignItems={'center'} gap={0.5}>
						{restProps.renderActions()}
					</Box>
				</DialogActions>
			)}
		</MuiDialog>
	)
}
