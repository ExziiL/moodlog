import Button from '@/components/Button/Button';
import FeelingsEntry from '@/components/FeelingsEntry/FeelingsEntry';
import Link from 'next/link';

export default function FeelingsPage() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-center">Welcome back!</h1>
			<section className="mt-12">
				<FeelingsEntry />
			</section>

			<div className="mt-12">
				<Link href="/history">
					<Button>Go to History</Button>
				</Link>
			</div>
		</>
	);
}
