import {
	Tooltip as MuiTooltip,
	TooltipProps,
	styled,
	tooltipClasses,
} from '@mui/material'

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
	<MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.common.black,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.black,
		padding: 8,
	},
}))

export default Tooltip
