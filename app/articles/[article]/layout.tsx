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
			width: 1800,
			height: 1600
		}
	}
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
