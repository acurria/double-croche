import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Interviews Cinéma | Nos cinéastes préférés et les acteurs du moment',
	description: 'Découvrez des interviews exclusives avec des acteurs, réalisateurs et personnalités du cinéma. Plongez dans les coulisses et découvrez les secrets de vos films préférés. Une immersion captivante dans l\'univers du 7ème art vous attend.',
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
