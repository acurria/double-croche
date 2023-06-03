import CategoryGrid1x1 from '@/app/components/organisms/category-grid-1x1'

export const metadata = {
	title: 'Participez : Concours exclusifs, cadeaux et opportunités',
	description: 'Ne manquez pas nos concours exclusifs ! Gagnez des cadeaux incroyables, découvrez des opportunités uniques et vivez des moments inoubliables. Participez dès maintenant et tentez votre chance de remporter des prix exceptionnels.',
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