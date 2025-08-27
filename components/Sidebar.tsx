import { logoMark } from '@/assets/logo';

export default function Sidebar() {
	return (
		<aside className=''>
			<nav className='h-full bg-primary-darker'>{logoMark}</nav>
		</aside>
	);
}
