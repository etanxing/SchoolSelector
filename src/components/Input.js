import Textfield from 'react-mdl/lib/Textfield';
import s from 'styles/Input.scss';
import React from 'react';

class Input extends React.Component {
  render() {
    let isNumber = this.props.type === 'number',
      textfield;

    if (isNumber) {
      textfield = <Textfield
        pattern='-?[0-9]*(\.[0-9]+)?'
        error="Please type a number"
        onChange={this.props.onChange}
        label={this.props.label}
        id={this.props.id}
        floatingLabel
      />
    } else {
      textfield = <Textfield
        onChange={this.props.onChange}
        label={this.props.label}
        id={this.props.id}
        floatingLabel
      />
    }
    return textfield;
  }
}

Input.displayName = 'Input';

// Uncomment properties you need
// Input.propTypes = {};
// Input.defaultProps = {};

export default Input;
