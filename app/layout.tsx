import './globals.css'
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Double-Croche | Toute l’actualité musique et cinéma ▶',
	description: 'Plongez dans un univers captivant mêlant musique et cinéma. Explorez des articles, critiques, interviews et découvrez les liens étroits entre ces deux formes d\'expression artistique. Laissez-vous inspirer par la passion et la créativité qui animent ce site',
	openGraph: {
		images: ['/logo-black.jpeg'],
	},
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<head>
				<link rel="stylesheet" href="https://use.typekit.net/lvu0sgp.css"/>
				<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;1,200;1,300&family=Red+Hat+Display&family=Source+Serif+4&display=swap" rel="stylesheet" />
			</head>
			<body>
				{children}
			</body>
		</html>
	)
}
