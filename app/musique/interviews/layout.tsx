import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Interviews Musique: Artistes, révélations et inspirations',
	description: 'Découvrez nos interviews exclusives avec des artistes de renom et des révélations musicales prometteuses. Plongez dans les coulisses de la création, partagez les inspirations et vibrez au rythme des histoires captivantes de l\'industrie musicale.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
		</>
	)
}
