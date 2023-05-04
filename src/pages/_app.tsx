import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import UserProvider from '@/contexts/UserProvider';
import Layout from '@/layouts/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}
