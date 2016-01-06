import s from 'styles/App.scss';
import React from 'react';
import SearchCriteria from './SearchCriteria';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <SearchCriteria/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
