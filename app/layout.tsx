import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import ReactQueryProvider from '@/ultils/ReactQueryProvider';
import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
	title: 'SaaS App with Supabase',
	description: 'Saas app with Supabase',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' data-theme='dim'>
			<body className='antialiased'>
				<ReactQueryProvider>
					<Sidebar />
					{children}
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
