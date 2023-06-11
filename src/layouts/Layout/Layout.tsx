import MobileNavBar from '@/components/MobileNavBar/MobileNavBar';
import * as React from 'react';
import { FC } from 'react';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div style={{ padding: '8px' }}>
			<div style={{ paddingBottom: '64px' }}>{children}</div>
			<MobileNavBar />
		</div>
	);
};

export default Layout;
