import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { IconType } from 'react-icons';
import { FiClock, FiEdit3, FiHome } from 'react-icons/fi';

const pages = [
	{
		name: 'Feelings',
		href: '/feelings',
		icon: FiEdit3,
	},
	{
		name: 'Home',
		href: '/',
		icon: FiHome,
	},
	{
		name: 'History',
		href: '/history',
		icon: FiClock,
	},
];

function MobileNavBar() {
	const pathname = usePathname();

	return (
		<div className="btm-nav">
			{pages.map((page, index) => {
				const IconComponent = page.icon as IconType;
				const isActive = page.href === pathname;

				return (
					<Link
						key={index}
						href={page.href}
						data-tip={page.name}
						className={`${isActive ? 'active' : ''}`}
					>
						<IconComponent size={20} />
					</Link>
				);
			})}
		</div>
	);
}

export default MobileNavBar;
