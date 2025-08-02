'use client';

import { ReactChildren } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProvider({
	children,
}: {
	children: ReactChildren;
}) {
	const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
