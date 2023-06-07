import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Playlists Musique: Sélections, genres et ambiances',
	description: 'Découvrez nos playlists musicales soigneusement sélectionnées. Explorez différents genres, ambiances et découvrez de nouveaux sons qui vous feront vibrer. Plongez dans une expérience musicale immersive et laissez-vous emporter par nos sélections captivantes.',
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
