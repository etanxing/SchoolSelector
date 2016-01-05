import s from 'styles/Input.scss';
import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <label>{this.props.label}</label>
        <input type="text" />
      </div>
    );
  }
}

Input.displayName = 'Input';

// Uncomment properties you need
// Input.propTypes = {};
// Input.defaultProps = {};

export default Input;
