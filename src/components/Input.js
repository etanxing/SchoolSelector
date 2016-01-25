import s from 'styles/Input.scss';
import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="form-group input">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" id={this.props.id} placeholder={this.props.placeholder || this.props.label} onChange={this.props.onChange} type={this.props.type || 'text'}/>
      </div>
    );
  }
}

Input.displayName = 'Input';

// Uncomment properties you need
// Input.propTypes = {};
// Input.defaultProps = {};

export default Input;
