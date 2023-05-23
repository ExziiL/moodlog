import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Link href="/feelings">
				<Button>Go to Feelings</Button>
			</Link>
		</>
	);
}
