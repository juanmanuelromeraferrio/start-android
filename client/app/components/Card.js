var React = require('react');

function Card(props) {
    return (
    	<div className='container'>
    		<div className='row'>
    			<div className='card'>
    				{props.children}
    			</div>
    		</div>
    	</div>
    )
}

module.exports = Card;