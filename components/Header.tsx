'use client';

import { Button } from 'react-aria-components';
import FilterDropdown from './ui/FilterDropdown';

export default function Header() {
	return (
		<header className='flex justify-between'>
			<section>
				<h1>title</h1>
				<p>description</p>
			</section>
			<section className='flex gap-6'>
				<FilterDropdown />
				<Button className='btn-primary'>+ new invoice</Button>
			</section>
		</header>
	);
}
