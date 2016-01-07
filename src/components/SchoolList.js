import s from 'styles/SchoolList.scss';
import React from 'react';
import Dispatcher from '../Dispatcher';
import Store from '../Store';

function getSchoolList() {
  return Store.getSchoolList();
}

class SchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getSchoolList()
    };

    this._onListChange = this._onListChange.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this._onListChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onListChange);
  }

  render() {
    return (
      <ul>
        <li>112</li>
      </ul>
    );
  }

  _onListChange() {
    this.setState({
      list: getSchoolList()
    });
  }
}

SchoolList.displayName = 'SchoolList';

// Uncomment properties you need
// SchoolList.propTypes = {};
// SchoolList.defaultProps = {};

export default SchoolList;
