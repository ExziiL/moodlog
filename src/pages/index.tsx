import FeelingsRating from '@/components/FeelingsRating/FeelingsRating';
import Layout from '@/layouts/Layout/Layout';

import UserProvider from '@/contexts/UserProvider';

export default function Home() {
	return (
		<UserProvider>
			<Layout>
				<h1 className="p-4 text-4xl font-semibold text-center">Welcome back!</h1>
				<section className="mt-12">
					<FeelingsRating />
				</section>
			</Layout>
		</UserProvider>
	);
}
