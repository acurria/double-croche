import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Chroniques Cinéma: Critiques, analyses et actualités',
	description: 'Plongez dans l\'univers du cinéma avec nos chroniques riches en critiques, analyses et actualités. Découvrez des articles passionnants qui vous guideront à travers le monde du 7ème art.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>{children}</>
	)
}
