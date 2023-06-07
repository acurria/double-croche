import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Festivals Cinéma: Événements, projections et découvertes',
	description: 'Explorez l\'univers palpitant des festivals de cinéma. Découvrez des événements incontournables, des projections exclusives et des découvertes cinématographiques captivantes. Plongez dans l\'effervescence artistique et vivez des moments uniques au cœur de la scène cinématographique.',
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
