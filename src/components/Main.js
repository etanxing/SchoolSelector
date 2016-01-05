import s from 'styles/App.scss';
import React from 'react';
import SearchCriteria from './SearchCriteria';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      Hello!!
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <SearchCriteria/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
