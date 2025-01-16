import { Outlet } from 'react-router'
import { Routes } from '@/router'
import { ThemeModeToggleDropdown } from '@/shared/theme'

export const RootTemplate: React.FC = () => {
	return (
		<>
			<aside className='h-[3rem] border-b'>
				<div className='mx-auto h-[inherit] max-w-screen-lg'>
					<div className='flex h-[inherit] items-center justify-between'>
						<h1>react-dev</h1>
						<ThemeModeToggleDropdown />
					</div>
				</div>
			</aside>
			<div className='mx-auto flex max-w-screen-lg'>
				<aside className='w-[15rem] shrink-0'>
					<div className='sticky h-[calc(100svh-3rem)] border-r'>
						<Routes />
					</div>
				</aside>
				<Outlet />
			</div>
		</>
	)
}
