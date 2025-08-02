import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactQueryProvider from '@/ultils/ReactQueryProvider';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'SaaS App with Supabase',
	description: 'Saas app with Supabase',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' data-theme='dim'>
			<body className={`antialiased`}>
				<ReactQueryProvider>
					<Header />
					<main className='grid grid-cols-3 gap-12 justify-center'>
						{children}
					</main>
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
