import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl';
import LeftSearchCriteria from './Menu';
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
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">School Selector</span>
            <div className="mdl-layout-spacer"></div>
            <div style={{position: 'relative'}}>
              <IconButton name="more_vert" id="demo-menu-lower-right" />
              <Menu target="demo-menu-lower-right" align="right">
                <MenuItem>FAQ</MenuItem>
                <MenuItem>About us</MenuItem>
              </Menu>
            </div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Filters</span>
          <nav className="mdl-navigation">
            <LeftSearchCriteria/>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <SearchCriteria/>
            <SchoolList/>
          </div>
        </main>
        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__right-section">
            <div className="mdl-logo">School Selector</div>
            <ul className="mdl-mini-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="mailto:william@workswell.com.au?subject=SchoolSelector">About us</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
