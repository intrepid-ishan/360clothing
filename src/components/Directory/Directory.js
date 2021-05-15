import React from 'react';
import { connect } from 'react-redux';

import classes from './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = (props) => {
  const { sections } = props;

  return (
    <div className={classes.directoryMenu}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: state.directory.sections
});

export default connect(mapStateToProps)(Directory);
