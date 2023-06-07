import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Participez : Concours exclusifs, cadeaux et opportunités',
	description: 'Ne manquez pas nos concours exclusifs ! Gagnez des cadeaux incroyables, découvrez des opportunités uniques et vivez des moments inoubliables. Participez dès maintenant et tentez votre chance de remporter des prix exceptionnels.',
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
