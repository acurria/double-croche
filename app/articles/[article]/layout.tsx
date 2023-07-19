import {getArticle} from "@/src/createClient";
import {PortableText} from '@portabletext/react'

type propsType = {
	params: {article: string}
};

export async function generateMetadata({params}:propsType) {
	const slug = params.article;
	const article = await getArticle(slug);
	console.log(<PortableText value={article.content} />)
	return {
	  title: article.title,
	  description: article.metadescription,
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
