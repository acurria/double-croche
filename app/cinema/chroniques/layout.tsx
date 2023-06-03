import CategoryGrid3x2 from '@/app/components/organisms/category-grid-3x2'

export const metadata = {
	title: 'Chroniques Cinéma: Critiques, analyses et actualités',
	description: 'Plongez dans l\'univers du cinéma avec nos chroniques riches en critiques, analyses et actualités. Découvrez des articles passionnants qui vous guideront à travers le monde du 7ème art.',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<CategoryGrid3x2/>
		</>
	)
}