"use client";

export default function Pager() {

	return (
		<div className='pager-container'>
			<ul className='pager-list'>
				<li className='pager-item prev-item'>
					<button className='prev-button' title='Accéder à la page précédente'>
						<a href='#'>Précédent</a>
					</button>
				</li>
				<li className='pager-item number-item'>
					<button className='page-number'>
						<a href='#'>1</a>
					</button>
				</li>
				<li className='pager-item number-item'>
					<button className='page-number'>
						<a href='#'>2</a>
					</button>
				</li>
				<li className='pager-item number-item'>
					<button className='page-number'>
						<a href='#'>3</a>
					</button>
				</li>
				<li className='pager-item number-item'>
					<button className='page-number'>
						<a href='#'>4</a>
					</button>
				</li>
				<li className='pager-item number-item'>
					<button className='page-number'>
						<a href='#'>5</a>
					</button>
				</li>
				<li className='pager-item next-item'>
					<button className='next-button' title='Accéder à la page suivante'>
						<a href='#'>Suivant</a>
					</button>
				</li>
			</ul>
		</div>
	)
}
