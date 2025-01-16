import { Link } from 'react-router'

type Path = { to: string; label: string }
const ROUTES: Path[] = []

export const Routes: React.FC = () => {
	return (
		<nav>
			<ul>
				{ROUTES.map((path) => (
					<li key={path.to}>
						<Link to={path.to}>{path.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
