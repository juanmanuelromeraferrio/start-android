var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

function SelectColor (props) {
  var colors = ['red','blue','green'];
  return (
    <ul className='colors'>
      {colors.map(function (color) {
        return (
          <li className='color-square'
            style={{background: color}}
            onClick={props.onSelect.bind(null, color)}
            key={color}>
          </li>
        )
      })}
    </ul>
  )
}

function TemplateDisplay (props) {
	return (
		<div className='color-square' 
			style={{background: props.color}} 
		/>
	)
}

SelectColor.propTypes = {
  onSelect: PropTypes.func.isRequired,
};


class ColorSelector extends React.Component {
	constructor(props) {
    	super();
    	this.state = {
      	selectedColor: 'red'
    	};

    	this.updateColor = this.updateColor.bind(this);
  	}

	updateColor(color) {
	  this.setState(function () {
	      return {
	      	selectedColor: color
	      }
	    });
  	}

	render() {
		return (
			<div className='row'>
				<SelectColor onSelect={this.updateColor} />
				<TemplateDisplay color={this.state.selectedColor} />
			</div>
		)
	}
}

module.exports = ColorSelector;