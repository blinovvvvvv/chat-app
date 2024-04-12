'use client';

import { ThemeContext } from '@/src/app/theme-provider/ThemeProvider';
import Button from '@/src/shared/ui/button/Button';
import clsx from 'clsx';
import { memo, useCallback, useContext } from 'react';

function ToggleTheme({ className }: { className?: string }) {
	const { theme, setTheme } = useContext(ThemeContext);
	const isDark = theme === 'dark';

	const onClickHandler = useCallback(
		() => setTheme(isDark ? 'light' : 'dark'),
		[isDark, setTheme]
	);

	return (
		<div className={clsx('select-none', className)} data-testid='toggle-theme'>
			<span className='text-xs font-medium'>Dark theme</span>
			<Button
				className='text-xs text-blue'
				variant='clear'
				onClick={onClickHandler}
			>
				{isDark ? 'Enabled' : 'Disabled'}
			</Button>
		</div>
	);
}

export default memo(ToggleTheme);
