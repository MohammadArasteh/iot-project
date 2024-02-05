const ErrorHelperText = (props: React.PropsWithChildren) => {
	return (
		<p className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained">
			{props.children}
		</p>
	)
}

export default ErrorHelperText
