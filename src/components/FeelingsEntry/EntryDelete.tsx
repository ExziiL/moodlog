import React from 'react';

import { UserContext } from '@/contexts/UserProvider';

import { FiTrash2 } from 'react-icons/fi';

import styles from './EntryDelete.module.scss';

interface EntryDeleteProps {
	id: string;
}

function EntryDelete({ id }: EntryDeleteProps) {
	const { deleteEntry } = React.useContext(UserContext);

	const handleEntryDelete = () => {
		deleteEntry(id);
	};

	return (
		<div className={`absolute flex justify-end  pr-1 items-center right-0 w-fit h-full `}>
			<div className={`${styles.blurLeft} bg-green-500 w-12 h-full`}></div>
			<div
				className="flex items-center justify-end w-10 h-full text-gray-200 bg-white cursor-pointer hover:text-gray-700"
				onClick={handleEntryDelete}
			>
				<FiTrash2 className="w-6 h-6 " />
			</div>
		</div>
	);
}

export default EntryDelete;
