import CategoryGrid3x2 from '@/app/components/organisms/category-grid-3x2'

export const metadata = {
	title: 'Festivals Cinéma: Événements, projections et découvertes',
	description: 'Explorez l\'univers palpitant des festivals de cinéma. Découvrez des événements incontournables, des projections exclusives et des découvertes cinématographiques captivantes. Plongez dans l\'effervescence artistique et vivez des moments uniques au cœur de la scène cinématographique.',
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