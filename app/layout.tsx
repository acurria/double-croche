import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
			</head>
			<body>
				{children}
			</body>
		</html>
	)
}
