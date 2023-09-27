"use client"

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styledbutton.module.css'

const redirectToAnotherPage = () => {
  window.location.href = "/light"; 
};

const StyledButton = ({ children }: any) => {
  return (
    <button onClick={redirectToAnotherPage} className={styles.styledbutton}>
      {children}
    </button>
  );
}

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,  
};

export default StyledButton;