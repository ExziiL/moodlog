import awesomeIcon from '@/assets/svgs/awesome.svg';
import awfulIcon from '@/assets/svgs/awful.svg';
import badIcon from '@/assets/svgs/bad.svg';
import goodIcon from '@/assets/svgs/good.svg';
import neutralIcon from '@/assets/svgs/neutral.svg';
import Layout from '@/layouts/Layout/Layout';
import Image from 'next/image';

export default function Home() {
	return (
		<Layout>
			<h1 className="text-4xl font-semibold text-center">Welcome back!</h1>
			<section className="mt-32">
				<h2 className="text-2xl font-semibold">How are you feeling?</h2>
				<Image
					src={awesomeIcon}
					alt="Awesome Icon"
				/>
				<Image
					src={goodIcon}
					alt="Awesome Icon"
				/>
				<Image
					src={neutralIcon}
					alt="Awesome Icon"
				/>
				<Image
					src={badIcon}
					alt="Awesome Icon"
				/>
				<Image
					src={awfulIcon}
					alt="Awesome Icon"
				/>
			</section>
		</Layout>
	);
}
