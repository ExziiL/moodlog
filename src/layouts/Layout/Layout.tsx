import * as React from 'react';
import { FC } from 'react';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return <div className="p-4">{children}</div>;
};

export default Layout;
