import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Article',
	description: 'A faire',
};

export default function RootLayout({
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
