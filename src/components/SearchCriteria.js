import s from 'styles/SearchCriteria.scss';
import React from 'react';
import config from './SearchCriteria.json';
import Input from './Input';
import Dropdown from './Dropdown';

class SearchCriteria extends React.Component {
  handleChange(e) {
    // Dispatcher.dispatch({
    //   actionType: ActionTypes.CHANGE_SELECTED_QUESTION,
    //   props: props
    // });
    console.log(e.target.id, e.target.value);
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
