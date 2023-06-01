export const metadata = {
	title: 'Article',
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
		</>
	)
}
