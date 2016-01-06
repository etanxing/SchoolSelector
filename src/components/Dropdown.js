'use strict';

import React from 'react';
import s from 'styles/Dropdown.scss';

class Dropdown extends React.Component {
  render() {
    let options = this.props.options;

    if (this.props.addAll) {
      options.unshift(this.props.addAllOption || 'All');
    }

    console.log(options);
    return (
      <div className="form-group dropdown">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select className="form-control" onChange={this.props.onChange} id={this.props.id}>
          {options.map(o=><option key={o}>{o}</option>)}
        </select>
      </div>
    );
  }
}

Dropdown.displayName = 'Dropdown';

// Uncomment properties you need
// Dropdown.propTypes = {};
// Dropdown.defaultProps = {};

export default Dropdown;
