import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import classes from './MenuItem.scss';

const MenuItem = (props) => {
  const { title, imageUrl, history, linkUrl, match, size } = props;

  const menuClass = classNames({
    [classes.menuItemLarge]: !!size,
    [classes.menuItem]: true
  });

  const doRouting = () => {
    if (window.shouldOpenInNewTab) {
      window.open(`${match.url}${linkUrl}`, '_blank', 'noopener');
    } else {
      history.push(`${match.url}${linkUrl}`);
    }
  };

  return (
    <div className={menuClass} role="link" onClick={doRouting} tabIndex="0">
      <div
        className={classes.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.content}>
        <h1 className={classes.title}>{title.toUpperCase()}</h1>
        <span className={classes.subTitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
