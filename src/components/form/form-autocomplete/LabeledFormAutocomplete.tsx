import withFixedLabel, { FixedLabelProps } from '@components/hoc/withFixedLabel'
import type { FieldValues } from 'react-hook-form'
import FormAutocomplete, { FormAutocompleteProps } from './FormAutocomplete'

export default function LabeledFormAutocomplete<TData, F extends FieldValues>(
	props: FormAutocompleteProps<TData, F> & FixedLabelProps,
) {
	return withFixedLabel<FormAutocompleteProps<TData, F>>(FormAutocomplete)(
		props,
	)
}
