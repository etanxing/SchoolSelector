import s from 'styles/Input.scss';
import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="form-group input">
        <label className="sr-only" htmlFor={this.props.id}>{this.props.label}</label>
        <input className="form-control" id={this.props.id} placeholder={this.props.label} onChange={this.props.onChange}/>
      </div>
    );
  }
}

Input.displayName = 'Input';

// Uncomment properties you need
// Input.propTypes = {};
// Input.defaultProps = {};

export default Input;
