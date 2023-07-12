"use client";

import Image from 'next/image'
interface propsType {
	show:boolean
}
export default function Loader(props:propsType) {

	return (
		<div className={`wrapper-loader ${props.show ? 'show' : 'hide'}`} >
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
