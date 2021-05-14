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

  return (
    <div
      className={menuClass}
      role="link"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      tabIndex="0"
    >
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
