export const metadata = {
	title: 'Agenda',
	description: 'A faire',
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