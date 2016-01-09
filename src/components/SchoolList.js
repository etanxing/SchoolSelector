import s from 'styles/SchoolList.scss';
import React from 'react';
import Dispatcher from '../Dispatcher';
import Store from '../Store';

function getSchoolList() {
  return Store.getSchoolList();
}

function getSchoolTypeField() {
  return Store.getSchoolTypeField();
}

class SchoolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getSchoolList(),
      schoolTypeField: getSchoolTypeField()
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
        {this.state.list.map(e=><li>{e.name} | {e.ICSEA} | {e[this.state.schoolTypeField]}</li>)}
      </ul>
    );
  }

  _onListChange() {
    this.setState({
      list: getSchoolList(),
      schoolTypeField: getSchoolTypeField()
    });
  }
}

SchoolList.displayName = 'SchoolList';

// Uncomment properties you need
// SchoolList.propTypes = {};
// SchoolList.defaultProps = {};

export default SchoolList;
