import {
	ArrayPath,
	Control,
	FieldValues,
	UseFieldArrayReturn,
	useFieldArray,
} from 'react-hook-form'

type FormArrayFieldProps<
	Form extends FieldValues,
	N extends ArrayPath<Form>,
> = {
	control: Control<Form>
	name: N
	children: (api: UseFieldArrayReturn<Form, N> & { name: N }) => React.ReactNode
}

export default function FormArrayField<
	T extends FieldValues,
	N extends ArrayPath<T>,
>(props: FormArrayFieldProps<T, N>) {
	const api = useFieldArray({
		control: props.control,
		name: props.name,
	})
	return props.children({
		...api,
		name: props.name,
	})
}
