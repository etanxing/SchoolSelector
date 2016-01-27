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
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this._onListChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onListChange);
  }

  render() {
    return (
      <div className="school-list">
          <table className={'pure-table ' + this.state.schoolTypeField}>
            <caption>School data from <a href="http://www.theaustralian.com.au/national-affairs/in-depth/schools/interactive#browse">The Australian</a></caption>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Rank</th>
                <th>Schoo Name</th>
                <th>ICSEA</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {this.state.list.map(this.renderItem)}
            </tbody>
          </table>
      </div>
    );
  }

  renderItem(e) {
    return (
        <tr data-p-index={e.p_index} data-s-index={e.s_index}>
          <td>{e.p_index}</td>
          <td>{e.s_index}</td>
          <td>{e.name}</td>
          <td>{e.ICSEA}</td>
          <td>{e[this.state.schoolTypeField]}</td>
        </tr>
      )
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
