import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {SECTIONS} from '../config';

import styles from './navigationMenu.module.scss';
import LocalizedLink from './LocalizedLink';

class NavigationMenu extends React.Component {
  state = {
    menuOpen: false
  };

  private handleMenuClick(): void {
    this.setState(() => ({
      menuOpen: this.state.menuOpen ? false : true
    }));
  }

  private handleMenuHover(): void {
    this.setState(() => ({
      menuOpen: true
    }));
  }

  private handleMenuClose(): void {
    this.setState(() => ({
      menuOpen: false
    }));
  }

  private renderSectionLinks(sections: string[]): JSX.Element | null {
    const sectionsExcludingCompany = sections.filter(
      section => section !== 'company'
    );

    if (this.state.menuOpen) {
      return (
        <ul
          className={styles.menuList}
          onMouseLeave={() => this.handleMenuClose()}
        >
          {sectionsExcludingCompany.map(section => (
            <LocalizedLink key={section} to={`/#${section}`}>
              <Translated id={`${section}-header`} />
            </LocalizedLink>
          ))}
        </ul>
      );
    }
    return null;
  }

  public render(): JSX.Element {
    return (
      <div className={styles.menuContainer}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => this.handleMenuHover()}
          onClick={() => this.handleMenuClick()}
        >
          <img src={require('../styling/icons/menu-white.svg')} alt="Menu" />
        </button>
        {this.renderSectionLinks(SECTIONS)}
      </div>
    );
  }
}

export default NavigationMenu;
