import { Header } from '@/src/widgets/header';
import { ReactNode, memo } from 'react';

function Page({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className='mx-auto max-w-[989px] px-3'>{children}</main>
		</>
	);
}

export default memo(Page);
