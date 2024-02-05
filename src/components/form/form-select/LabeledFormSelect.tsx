import withFixedLabel, {
	FixedLabelProps,
} from '@/components/hoc/withFixedLabel'
import { FormSelect } from '.'
import type { FormSelectProps } from './FormSelect'
import type { FieldValues } from 'react-hook-form'

export default function LabeledFormSelect<F extends FieldValues>(
	props: FormSelectProps<F> & FixedLabelProps,
) {
	return withFixedLabel<FormSelectProps<F>>(FormSelect)(props)
}
