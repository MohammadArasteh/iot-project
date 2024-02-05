import withFixedLabel, { FixedLabelProps } from '@components/hoc/withFixedLabel'
import { FormTextarea } from '.'
import type { FormTextareaProps } from './FormTextarea'
import type { FieldValues } from 'react-hook-form'

export default function LabeledFormTextField<F extends FieldValues>(
	props: FormTextareaProps<F> & FixedLabelProps,
) {
	return withFixedLabel<FormTextareaProps<F>>(FormTextarea)(props)
}
