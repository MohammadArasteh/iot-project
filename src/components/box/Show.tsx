type Props = {
	if: boolean
} & React.PropsWithChildren

export default function Show(props: Props) {
	return props.if ? props.children : null
}
