import { ToggleButtonGroup, ToggleButtonGroupProps } from '@mui/material'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type FormToggleButtonGroupProps<Field extends FieldValues> = {
	control: Control<Field>
	name: Path<Field>
	children: React.ReactNode
} & ToggleButtonGroupProps

export default function FormToggleButtonGroup<Field extends FieldValues>(
	props: FormToggleButtonGroupProps<Field>,
) {
	const { control, name, children, ...rest } = props
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<ToggleButtonGroup
					value={field.value}
					onChange={(_, value) => field.onChange(value)}
					{...rest}
				>
					{children}
				</ToggleButtonGroup>
			)}
		/>
	)
}
