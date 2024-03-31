'use client';

import { logout } from '@/src/features/auth';
import { ToggleTheme } from '@/src/features/toggle-theme';
import arrowIcon from '@/src/shared/assets/arrow.svg';
import { useOutside } from '@/src/shared/lib/hooks/use-outside/useOutside';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import clsx from 'clsx';
import Image from 'next/image';
import { memo, useCallback } from 'react';
import ProfileHeading from '../profile-heading/ProfileHeading';

function AvatarDropdown() {
	/** used to close to panel when clicking on other element */
	const { setIsVisible, ref, visible } = useOutside(false);

	const onClickHandler = useCallback(
		() => setIsVisible((prev) => !prev),
		[setIsVisible]
	);

	const onLogout = useCallback(() => logout(), []);

	return (
		<div className='relative h-full' ref={ref} data-testid='avatar-dropdown'>
			<Button
				variant='clear'
				className={clsx(
					'flex h-full items-center justify-center gap-x-2 px-[5px] transition-colors hover:bg-gray-400 dark:hover:bg-dark-gray-500',
					{
						['bg-gray-400 dark:bg-dark-gray-500']: visible,
					}
				)}
				onClick={onClickHandler}
				data-testid='avatar-dropdown-button'
			>
				<Avatar width={34} height={34} />

				{/** arrow */}
				<Image
					data-testid='avatar-dropdown-arrow'
					src={arrowIcon}
					alt='Arrow'
					className={clsx('transition-transform', {
						['rotate-180']: visible,
					})}
				/>
			</Button>

			{/** Panel */}
			<Card
				data-testid='avatar-dropdown-panel'
				className={clsx(
					'absolute right-0 top-[calc(100%+10px)] flex w-[250px] flex-col gap-y-[10px] rounded border border-gray-400 bg-gray-100 p-5 transition-all dark:border-dark-gray-200 dark:bg-dark-gray-500',
					{
						['block opacity-100']: visible,
						['invisible opacity-0']: !visible,
					}
				)}
			>
				<ProfileHeading data-testid='avatar-dropdown-profile-heading' />
				<ToggleTheme className='flex justify-between' />
				<Button
					onClick={onLogout}
					className='self-start text-xs text-red'
					variant='clear'
				>
					Logout
				</Button>
			</Card>
		</div>
	);
}

export default memo(AvatarDropdown);
