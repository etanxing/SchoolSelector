import purecss from 'purecss';
import React from 'react';
import Menu from './Menu';
import SearchCriteria from './SearchCriteria';
import SchoolList from './SchoolList';
import launch_page_style from 'styles/Launch-page.scss';
import app_style from 'styles/App.scss';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this._toggleClass = this._toggleClass.bind(this);
  }

  _toggleClass(e) {
    e.preventDefault();

    this.setState({
      active: !this.state.active
    });
  }

  render() {
    let active = this.state.active ? 'active' : '';

    return (
      <div className={'container ' + active}>
        <div className="header">
          <h1>School Selector</h1>
          <button className="pure-button button-small pure-button-primary">Get started</button>
        </div>
        <a href="#menu" id="menuLink" className="menu-link" onClick={this._toggleClass}>
          <span></span>
        </a>
        <Menu/>
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
