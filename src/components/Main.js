import s from 'styles/App.scss';
import React from 'react';
import SearchCriteria from './SearchCriteria';
import SchoolList from './SchoolList';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchCriteria/>
        <SchoolList/>
        <footer>
          <a href="mailto:william@workswell.com.au?subject=SchoolSelector">About us</a>
        </footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
