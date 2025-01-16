import { Moon, Sun } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { useTheme } from './provider'
import { Button } from '@/shared/components/shadcn/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shared/components/shadcn/dropdown-menu'

const THEMES: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']

const themeMap = {
	light: 'Светлая',
	dark: 'Тёмная',
	system: 'Как в системе',
} as const

export const ThemeModeToggleDropdown: React.FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost_secondary'
					size='icon_32'
					className='data-[state=open]:bg-secondary/80'
				>
					<Sun
						className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0' /* transition-all */
					/>
					<Moon
						className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100' /* transition-all */
					/>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				onCloseAutoFocus={(e) => e.preventDefault()}
			>
				{THEMES.map((mode) => (
					<DropdownMenuItem
						key={mode}
						onClick={() => setTheme(mode)}
						className={cn(theme == mode && 'bg-secondary')}
					>
						{themeMap[mode]}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
