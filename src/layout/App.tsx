import React from 'react';
import {Helmet} from 'react-helmet';
import {
  IntlProvider,
  addLocaleData,
  FormattedMessage as Translated
} from 'react-intl';

//Config
import {APP_NAME} from '../config';

// Styling
import styles from './app.module.scss';

// Components
import Footer from './Footer';
import Header from './Header';
import LocalizedLink from '../components/LocalizedLink';

// Locale data
import enData from 'react-intl/locale-data/en';
import deData from 'react-intl/locale-data/de';

// Translations
import en from '../i18n/en.json';
import de from '../i18n/de.json';

const translations = {en, de};

addLocaleData([...enData, ...deData]);

interface AppProps {
  readonly locale: string;
  readonly children: any;
}

const BackToTopLink = () => (
  <LocalizedLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
    <Translated id="back-to-top-link" />
  </LocalizedLink>
);

const AppLayout: React.FunctionComponent<AppProps> = ({
  locale,
  children
}: AppProps) => (
  <IntlProvider
    locale={locale}
    messages={translations[locale]}
    textComponent={React.Fragment}
  >
    <div className={styles.App}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{APP_NAME}</title>
      </Helmet>
      <Header locale={locale} />
      {children}
      <BackToTopLink />
      <Footer />
    </div>
  </IntlProvider>
);

export default AppLayout;
