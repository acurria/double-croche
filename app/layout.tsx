import './globals.css'
import Navigation from '@/app/components/organisms/navigation'
import Footer from '@/app/components/organisms/footer'

export const metadata = {
	title: "Double-Croche - L'actualité musique et cinéma",
	description: 'Interviews exclusives, playlists captivantes. Une expérience culturelle unique, pleine de créativité et de passion. Une immersion totale dans l\'univers artistique et musical.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
			</head>
			<body>
				<nav className='sticky top-0 z-20'>
					<Navigation />
				</nav>
				{children}
				<footer>
					<Footer/>
				</footer>
			</body>
		</html>
	)
}
