import styled from '@emotion/styled'

type Props = {
	src: string
}

export default function ImageCellRenderer(props: Props) {
	return <GridImageCell src={props.src} />
}

const GridImageCell = styled.img`
	width: 80px;
	height: 50px;
`
