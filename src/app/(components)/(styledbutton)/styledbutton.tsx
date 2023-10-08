"use client"

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styledbutton.module.css'

const redirectToAnotherPage = () => {
  window.open('/light', 'light', 'width=430, height=500, location=no, status=no, scrollbars=yes')
};

const StyledButton = ({ children }: any) => {
  return (
    // <button onClick={redirectToAnotherPage} className={styles.styledbutton}>
    //   {children}
    // </button>
    <div className={styles.styledbutton}>
    {children}
  </div>
  );
}

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,  
};

export default StyledButton;