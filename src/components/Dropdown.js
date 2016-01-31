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
      <div className="mdl-selectfield mdl-js-selectfield dropdown">
        <select className="mdl-selectfield__select" onChange={this.props.onChange} id={this.props.id} name="{this.props.label}">
          {options.map(o=>{
            if (Array.isArray(o)) {
              return <option key={o} value={o[1]}>{o[0]}</option>
            } else {
              return <option key={o}>{o}</option>
            }
          })}
        </select>
        <label className="mdl-selectfield__label" htmlFor="{this.props.label}">{this.props.label}</label>
      </div>
    );
  }
}

Dropdown.displayName = 'Dropdown';

// Uncomment properties you need
// Dropdown.propTypes = {};
// Dropdown.defaultProps = {};

export default Dropdown;
