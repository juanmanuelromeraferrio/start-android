import React from 'react';

function Card(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="card">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Card;
