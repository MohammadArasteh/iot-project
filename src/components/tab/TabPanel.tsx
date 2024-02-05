type TabPanelProps = {
	children?: React.ReactNode
	index: number
	value: number
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>

export default function TabPanel(props: TabPanelProps) {
	const { children, index, value, ...divProps } = props
	return (
		<div role="tabpanel" hidden={value !== index} {...divProps}>
			{children}
		</div>
	)
}
