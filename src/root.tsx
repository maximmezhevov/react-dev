import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/router'
import { ThemeProvider } from '@/shared/theme'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</StrictMode>
)
