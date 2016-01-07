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
      <form className="form-inline searchcriteria">
        {config.map(this.renderCriterion.bind(this))}
      </form>
    );
  }

  renderCriterion(item, index) {
    item.props.key = index;
    item.props.onChange = this.handleChange.bind(this);

    switch (item.type) {
      case 'input':
      return <Input {...item.props}/>;
      case 'dropdown':
      return <Dropdown {...item.props}/>;
    }
  }
}

SearchCriteria.displayName = 'SearchCriteria';

// Uncomment properties you need
// SearchCriteria.propTypes = {};
// SearchCriteria.defaultProps = {};

export default SearchCriteria;
