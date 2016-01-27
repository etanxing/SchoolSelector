import s from 'styles/Menu.scss';
import React from 'react';
import config from '../config/search_criteria_menu.json';
import Input from './Input';
import Dropdown from './Dropdown';
import Dispatcher from '../Dispatcher';

class Menu extends React.Component {
  handleChange(e) {
    let {id, value} = e.target;

    Dispatcher.dispatch({
      actionType: 'FILTER_UPDATED',
      data: {id, value}
    });
  }
  render() {
    return (
        <div className="menu">
          <div className="pure-menu">
            <span className="pure-menu-heading">Filters</span>
            <ul className="pure-menu-list pure-form">
              {config.filter(e=>e.enabled).map(this.renderCriterion.bind(this))}
            </ul>
          </div>
        </div>
    );
  }

  renderCriterion(item, index) {
    let component;
    item.props.key = index;
    item.props.onChange = this.handleChange.bind(this);

    switch (item.type) {
      case 'input':
      component = <Input {...item.props}/>;
      break;
      case 'dropdown':
      component = <Dropdown {...item.props}/>;
      break;
    }

    return <li className="pure-menu-item">{component}</li>
  }
}

Menu.displayName = 'Menu';

// Uncomment properties you need
// Menu.propTypes = {};
// Menu.defaultProps = {};

export default Menu;
