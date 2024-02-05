import React from 'react'
import { MenuItem } from './menuItems'
import {
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type Props = {
	parentItem?: MenuItem
	items: Array<MenuItem>
	onItemClick(item: MenuItem, route: string): void
}

export default function MenuItemGenerator({
	parentItem,
	items,
	onItemClick,
}: Props) {
	const [openedLists, setOpenLists] = React.useState<Array<boolean>>([])
	return (
		<List>
			{items.map((item, index) => (
				<div key={index}>
					<ListItem disablePadding>
						<ListItemButton
							onClick={() => {
								if (!item.children) {
									const itemRoute = parentItem
										? `${parentItem.route}/${item.route}`
										: item.route
									onItemClick(item, itemRoute)
								}
								if (item.children) {
									const list = [...openedLists]
									const currentItemState = list[index]
									list.fill(false)
									list[index] = !currentItemState
									setOpenLists(list)
								}
							}}
						>
							<ListItemIcon>{item.icon ? item.icon : null}</ListItemIcon>
							<ListItemText primary={item.title} className="unselectable" />
							{item.children ? (
								openedLists[index] ? (
									<ExpandLess />
								) : (
									<ExpandMore />
								)
							) : null}
						</ListItemButton>
					</ListItem>
					{item.children && (
						<Collapse in={openedLists[index]} timeout="auto" unmountOnExit>
							<MenuItemGenerator
								parentItem={item}
								items={item.children}
								onItemClick={onItemClick}
							/>
						</Collapse>
					)}
				</div>
			))}
		</List>
	)
}
