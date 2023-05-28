import CategoryGrid1x1 from '@/app/components/organisms/category-grid-1x1'

export const metadata = {
	title: 'Musique - Playlists',
	description: 'A faire',
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