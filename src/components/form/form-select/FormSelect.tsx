import {
	Controller,
	type Control,
	type FieldValues,
	type Path,
} from 'react-hook-form'
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectProps,
} from '@mui/material'
import React from 'react'
import ErrorHelperText from '../../ErrorHelperText'

export type FormSelectProps<T extends FieldValues> = {
	control: Control<T>
	name: Path<T>
	formControlStyle?: React.CSSProperties
} & SelectProps<T>

export default function FormSelect<Field extends FieldValues>(
	props: FormSelectProps<Field>,
) {
	const { children, name, control, formControlStyle, ...otherProps } = props

	const id = React.useId()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => {
				const error = errors[field.name]
				return (
					<FormControl fullWidth style={formControlStyle}>
						{!!props.label && <InputLabel id={id}>{props.label}</InputLabel>}
						<>
							<Select
								{...otherProps}
								{...field}
								labelId={id}
								onChange={(e, child) => {
									if (props.onChange) props.onChange(e, child)
									field.onChange(e, child)
								}}
								error={!!error}
							>
								{children}
							</Select>
							{error ? (
								<ErrorHelperText>{error.message as string}</ErrorHelperText>
							) : null}
						</>
					</FormControl>
				)
			}}
		/>
	)
}

/**
 * https://github.com/mui/material-ui/issues/38481
 * use MenuItem directly in <FormSelect/> children until above issue gets fixed
 */
interface IFormSelectOptionProps {
	value: number
	label: string
}
FormSelect.Option = function Option(props: IFormSelectOptionProps) {
	const { value, label } = props
	return <MenuItem value={value}>{label}</MenuItem>
}
