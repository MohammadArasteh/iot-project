import { Box, BoxProps } from '@mui/material'
import React from 'react'

export type IconContainerProps = {
	icon: React.ReactNode
} & BoxProps

export default function IconContainer(props: IconContainerProps) {
	const { icon, children, ...rest } = props
	return (
		<Box display={'flex'} flexDirection={'row'} {...rest}>
			<Box padding={'0.5rem 0.5rem 0.5rem 0'}>{icon}</Box>
			<Box flex={1}>{children}</Box>
		</Box>
	)
}
