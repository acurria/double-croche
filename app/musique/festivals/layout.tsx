import {Metadata} from "next";
export const metadata: Metadata = {
	title: 'Festivals Musique | Programmations',
	description: 'Vivez l\'expérience incroyable des festivals de musique. Découvrez les scènes les plus vibrantes, les artistes les plus talentueux et une ambiance électrisante. Plongez dans un monde de sons envoûtants et de moments inoubliables.',
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
