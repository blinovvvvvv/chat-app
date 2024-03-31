import { Header } from '@/src/widgets/header';
import { Sidebar } from '@/src/widgets/sidebar';
import { ReactNode, memo } from 'react';

function Page({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className='mx-auto mt-5 grid max-w-[989px] grid-cols-[1fr_600px_66px] gap-x-[66px] px-3'>
				<Sidebar />
				<div>{children}</div>
			</main>
		</>
	);
}

export default memo(Page);
