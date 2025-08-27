import {
	Button,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
} from 'react-aria-components';

const statuses = ['paid', 'pending', 'draft'];

export default function FilterDropdown() {
	return (
		<Select placeholder='Filter by Status'>
			{/* <Label>Favorite Animal</Label> */}
			<Button>
				<SelectValue />
				<span>🔻</span>
			</Button>
			<Popover>
				<ListBox className='w-36 shadow-lg/15 right-0'>
					{statuses.map((item) => (
						<ListBoxItem key={item} className='px-4 py-2'>
							{item}
						</ListBoxItem>
					))}
				</ListBox>
			</Popover>
		</Select>
	);
}
