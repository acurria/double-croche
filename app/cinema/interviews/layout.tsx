import CategoryGrid3x2 from '@/app/components/organisms/category-grid-3x2'

export const metadata = {
	title: 'Interviews Cinéma: Acteurs, réalisateurs et secrets',
	description: 'Découvrez des interviews exclusives avec des acteurs, réalisateurs et personnalités du cinéma. Plongez dans les coulisses et découvrez les secrets de vos films préférés. Une immersion captivante dans l\'univers du 7ème art vous attend.',
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