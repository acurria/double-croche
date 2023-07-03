"use client";

import Image from 'next/image'

export default function Loader() {

	return (
		<div className='wrapper-loader'>
			<Image
				priority
				src="/logo-white.svg"
				alt="Double-Croche Logo"
				className="main-logo mr-2 inline-block"
				width={60}
				height={60}
			/>
		</div>
	)
}
