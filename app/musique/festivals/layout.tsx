import CategoryGrid3x2 from '@/app/components/organisms/category-grid-3x2'

export const metadata = {
	title: 'Festivals Musique: Scènes, artistes et ambiance',
	description: 'Vivez l\'expérience incroyable des festivals de musique. Découvrez les scènes les plus vibrantes, les artistes les plus talentueux et une ambiance électrisante. Plongez dans un monde de sons envoûtants et de moments inoubliables.',
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