export const metadata = {
	title: 'Agenda: Événements artistiques, festivals, cinéma et musique',
	description: 'Découvrez les événements artistiques incontournables de notre agenda : festivals, cinéma, musique et bien plus. Restez informé et ne manquez aucune occasion de vivre des expériences culturelles uniques.',
}

export default function Layout({
								   children,
							   }: {
	children: React.ReactNode
}) {
	return (
		<>{children}</>
	)
}