import Button from '@/components/Button/Button';
import FeelingsRating from '@/components/FeelingsRating/FeelingsRating';
import Layout from '@/layouts/Layout/Layout';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-center">Welcome back!</h1>
			<section className="mt-12">
				<FeelingsRating />
			</section>
			<Link href="/history">
				<Button>Go to History</Button>
			</Link>
		</>
	);
}
