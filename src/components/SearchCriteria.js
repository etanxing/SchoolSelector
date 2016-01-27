import s from 'styles/SearchCriteria.scss';
import React from 'react';
import config from '../config/search_criteria.json';
import Input from './Input';
import Dropdown from './Dropdown';
import Dispatcher from '../Dispatcher';

class SearchCriteria extends React.Component {
  handleChange(e) {
    let {id, value} = e.target;

    Dispatcher.dispatch({
      actionType: 'FILTER_UPDATED',
      data: {id, value}
    });
  }
  render() {
    return (
      <form className="pure-form pure-form-stacked search-criteria">
        <div className="pure-g">
          {config.filter(e=>e.enabled).map(this.renderCriterion.bind(this))}
        </div>
      </form>
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

    return <div className="pure-u-1-2 pure-u-sm-1-4">{component}</div>
  }
}

SearchCriteria.displayName = 'SearchCriteria';

// Uncomment properties you need
// SearchCriteria.propTypes = {};
// SearchCriteria.defaultProps = {};

export default SearchCriteria;
