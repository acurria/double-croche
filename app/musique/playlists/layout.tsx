import CategoryGrid1x1 from '@/app/components/organisms/category-grid-1x1'

export const metadata = {
	title: 'Playlists Musique: Sélections, genres et ambiances',
	description: 'Découvrez nos playlists musicales soigneusement sélectionnées. Explorez différents genres, ambiances et découvrez de nouveaux sons qui vous feront vibrer. Plongez dans une expérience musicale immersive et laissez-vous emporter par nos sélections captivantes.',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<CategoryGrid1x1/>
		</>
	)
}