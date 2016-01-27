'use strict';

import React from 'react';
import s from 'styles/Dropdown.scss';

class Dropdown extends React.Component {
  render() {
    let options = this.props.options;

    if (this.props.addAll) {
      options.unshift(this.props.addAllOption || 'All');
    }

    return (
      <div className="dropdown">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select className="pure-u-23-24" onChange={this.props.onChange} id={this.props.id}>
          {options.map(o=>{
            if (Array.isArray(o)) {
              return <option key={o} value={o[1]}>{o[0]}</option>
            } else {
              return <option key={o}>{o}</option>
            }
          })}
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
