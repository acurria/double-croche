import {getArticle} from "@/src/createClient";
import {PortableText} from '@portabletext/react'

type propsType = {
	params: {article: string}
};

export async function generateMetadata({params}:propsType) {
	const slug = params.article;
	const article = await getArticle(slug);

	return {
		title: article.title,
		description: article.metadescription,
		openGraph: {
			images: article.image,
		}
	}
}

export function generateImageMetadata() {
	return [
		{
			contentType: 'image/png',
			size: { width: 48, height: 48 },
			id: 'small',
		},
		{
			contentType: 'image/png',
			size: { width: 72, height: 72 },
			id: 'medium',
		},
	]
}

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
