import './admin.css'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
	authPage: true
}) {
	return (
		<>
		{children}
		</>
	)
}