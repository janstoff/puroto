import React, {FunctionComponent} from 'react';
import {Link} from 'gatsby';
import {injectIntl, InjectedIntlProps} from 'react-intl';

import locales from '../config/locales';

interface LocalizedLinkProps extends InjectedIntlProps {
  readonly to: string;
  readonly children?: any;
  readonly className?: string;
  readonly style?: object;
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
}

const LocalizedLink: FunctionComponent<LocalizedLinkProps> = ({
  to,
  children,
  intl: {locale},
  ...props
}) => {
  const path = locales[locale].default ? to : `/${locale}${to}`;

  return (
    <Link {...props} to={path}>
      {children}
    </Link>
  );
};

export default injectIntl(LocalizedLink);
