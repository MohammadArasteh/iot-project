import {
	BoxProps,
	SxProps,
	Theme,
	Typography,
	TypographyProps,
} from '@mui/material'
import { VerticalBox } from '..'

type Props = {
	title: string
	subTitle?: string
	titleProps?: TypographyProps
	subTitleProps?: TypographyProps
} & BoxProps

export default function Heading({
	title,
	subTitle,
	titleProps,
	subTitleProps,
	...boxProps
}: Props) {
	return (
		<VerticalBox {...boxProps}>
			<Typography sx={titleStyles(titleProps?.sx)} {...titleProps}>
				{title}
			</Typography>
			{!!subTitle && (
				<Typography sx={subTitleStyles(subTitleProps?.sx)} {...subTitleProps}>
					{subTitle}
				</Typography>
			)}
		</VerticalBox>
	)
}

const titleStyles = (style?: SxProps<Theme>): SxProps<Theme> => {
	return {
		fontSize: '2rem',
		textAlign: 'center',
		color: 'gray.main',
		fontWeight: 'bold',
		...style,
	}
}

const subTitleStyles = (style?: SxProps<Theme>): SxProps<Theme> => {
	return {
		fontSize: '1rem',
		marginTop: '.4rem',
		textAlign: 'center',
		color: 'gray.light',
		...style,
	}
}
