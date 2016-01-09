import s from 'styles/App.scss';
import React from 'react';
import SearchCriteria from './SearchCriteria';
import SchoolList from './SchoolList';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <SearchCriteria/>
        <SchoolList/>
        <img src={yeomanImage} alt="Yeoman Generator" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
