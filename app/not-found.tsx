"use client";

import './globals.css'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='not-found-page'>
            <div className="not-found-container">
                <h2>La page que vous tentez d’atteindre n’est pas disponible, mais vous trouverez plein d’autres choses chouettes sur <Link href="/#" aria-label="Retour à l'accueil">double-croche.com</Link> ! </h2>
            </div>
        </div>
    )
}
