import { BrowserRouter, Route, Routes } from 'react-router'
import { RootTemplate } from '@/root-template'

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RootTemplate />} />
			</Routes>
		</BrowserRouter>
	)
}
