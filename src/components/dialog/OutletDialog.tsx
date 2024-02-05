import { Outlet, useNavigate } from 'react-router-dom'
import {
	Dialog,
	DialogActions,
	DialogActionsProps,
	DialogContent,
	DialogContentProps,
	DialogProps,
	DialogTitle,
	DialogTitleProps,
} from '@mui/material'
import React from 'react'

type Props = Omit<DialogProps, 'onClose' | 'open'> & {
	backRoute?: string
}

const OutletDialog = ({ backRoute, ...props }: Props) => {
	const navigate = useNavigate()

	const onClose = () => {
		if (backRoute)
			navigate(backRoute, {
				replace: true,
				relative: 'path',
			})
		else navigate(-1)
	}

	return (
		<Dialog open={true} onClose={onClose} {...props}>
			<Outlet />
		</Dialog>
	)
}

OutletDialog.Header = (props: React.PropsWithChildren & DialogTitleProps) => {
	const { children, ...rest } = props
	return (
		<DialogTitle fontWeight="bold" fontSize={24} {...rest}>
			{children}
		</DialogTitle>
	)
}

OutletDialog.Body = (props: React.PropsWithChildren & DialogContentProps) => {
	const { children, ...rest } = props
	return <DialogContent {...rest}>{children}</DialogContent>
}

OutletDialog.Footer = (props: React.PropsWithChildren & DialogActionsProps) => {
	const { children, ...rest } = props
	return (
		<DialogActions sx={{ p: 2 }} {...rest}>
			{children}
		</DialogActions>
	)
}

export default OutletDialog
