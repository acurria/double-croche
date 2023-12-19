import {getArticle} from "@/src/createClient";
import {PortableText} from '@portabletext/react'

type propsType = {
	params: {article: string}
};

export async function generateMetadata({params}:propsType) {
	const slug = params.article;
	const article = await getArticle(slug);

	return {
		title: article?.title ?? 'Double-Croche | Toute l’actualité musique et cinéma ▶',
		description: article?.metadescription ?? 'Plongez dans un univers captivant mêlant musique et cinéma. Explorez des articles, critiques, interviews et découvrez les liens étroits entre ces deux formes d\'expression artistique. Laissez-vous inspirer par la passion et la créativité qui animent ce site',
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
