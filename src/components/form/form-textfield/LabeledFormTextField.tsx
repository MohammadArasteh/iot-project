import withFixedLabel, { FixedLabelProps } from '@components/hoc/withFixedLabel'
import { FormTextField } from '.'
import type { FormTextFieldProps } from './FormTextField'
import type { FieldValues } from 'react-hook-form'

export default function LabeledFormTextField<F extends FieldValues>(
	props: FormTextFieldProps<F> & FixedLabelProps,
) {
	return withFixedLabel<FormTextFieldProps<F>>(FormTextField)(props)
}
