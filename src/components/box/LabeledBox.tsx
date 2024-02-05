import withFixedLabel, {
	FixedLabelProps,
} from '@/components/hoc/withFixedLabel'
import { Box, BoxProps } from '@mui/material'

export default function LabeledBox(props: BoxProps & FixedLabelProps) {
	return withFixedLabel<BoxProps>(Box)(props)
}
