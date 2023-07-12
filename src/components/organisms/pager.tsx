"use client";

import {useCallback, useEffect, useState} from "react";

export default function Pager(props:any) {

	const {items, total, onChange} = props;
	const [currentPage, setCurrentPage] = useState(0);

	const handleChange = useCallback((status:any, currentPage:any):any => {
		window.scrollTo({ top: 0});

		let newPage = currentPage;

		if(status === 'prev') {
			newPage = currentPage - 1;
		} else if (status === 'next' && currentPage < total - 1) {
			newPage = currentPage + 1;
		}

		setCurrentPage(newPage);
		onChange(newPage);

	},[onChange, total])

	const maxPages = Math.ceil(total/items)
	const isPrevDisabled = currentPage === 0;
	const isNextDisabled = currentPage === maxPages - 1;

	const prevButtonClass = currentPage === 0 ? 'disabled' : '';
	const nextButtonClass = currentPage === maxPages - 1 ? 'disabled' : '';

	return (
		<nav className={`pager-container ${total > 15 ? 'show' : 'hide'}`}>
			<div id='pager-list' className='pager-list'>
				<div className={`pager-item prev-item ${prevButtonClass}`}>
					<button onClick={(e) => handleChange('prev', currentPage)} id='prev-button' disabled={isPrevDisabled} title='Accéder à la page précédente'>
						<span>Précédent</span>
					</button>
				</div>
				<ul id='pagination-numbers' className='pagination-numbers'>
					{Array.from({ length: maxPages }, (_, i) => i + 1).map((pageNumber) => (
						<li key={pageNumber} className={pageNumber === currentPage + 1 ? "current" : ""}>
							<button onClick={(e) => handleChange('page', pageNumber - 1)}>
								{pageNumber}
							</button>
						 </li>
					))}
				</ul>
				<div className={`pager-item next-item ${nextButtonClass}`}>
					<button className={nextButtonClass} onClick={(e) => handleChange('next', currentPage)} id='next-button' disabled={isNextDisabled} title='Accéder à la page suivante'>
						<span>Suivant</span>
					</button>
				</div>
			</div>
		</nav>
	)
}
