import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import Autocomplete, {
	AutocompleteProps,
} from '../../autocomplete/Autocomplete'

export type FormAutocompleteProps<TData, Field extends FieldValues> = {
	name: Path<Field>
	control: Control<Field>
	getOptionValue?(value: TData): any
} & AutocompleteProps<TData>

export default function FormAutocomplete<TData, Field extends FieldValues>(
	props: FormAutocompleteProps<TData, Field>,
) {
	const { name, control, getOptionValue, ...autocompleteProps } = props
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState }) => {
				const error = formState.errors[field.name]
				return (
					<Autocomplete
						{...autocompleteProps}
						value={field.value}
						onValueChange={value => {
							field.onChange(
								getOptionValue && value
									? Array.isArray(value)
										? value.map(getOptionValue)
										: getOptionValue(value)
									: value,
							)
						}}
						textfieldProps={{
							error: !!error,
							helperText: error ? (error.message as string) : null,
							...props.textfieldProps,
						}}
					/>
				)
			}}
		/>
	)
}
