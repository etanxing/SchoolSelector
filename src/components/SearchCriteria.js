import s from 'styles/SearchCriteria.scss';
import React from 'react';
import config from './SearchCriteria.json';
import Input from './Input';

class SearchCriteria extends React.Component {
  render() {
    return (
      <div className="searchcriteria">
        {config.map(this.renderCriterion.bind(this))}
      </div>
    );
  }

  renderCriterion(item) {
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
