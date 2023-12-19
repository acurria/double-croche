import {getArticle} from "@/src/createClient";
import {PortableText} from '@portabletext/react'

type propsType = {
	params: {article: string}
};

export async function generateMetadata({params}:propsType) {
	const slug = params.article;
	const article = await getArticle(slug);

	return {
		title: article?.title ?? 'Page non trouvée',
		description: article?.metadescription ?? 'Page non trouvée',
		openGraph: {
			images: article?.image ?? 'Image non trouvée'
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
