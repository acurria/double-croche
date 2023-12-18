import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Agenda | Albums, Concerts, Films, Expos, Théâtre',
    description: 'Découvrez les événements artistiques incontournables de notre agenda : festivals, cinéma, musique et bien plus. Restez informé et ne manquez aucune occasion de vivre des expériences culturelles uniques.',
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