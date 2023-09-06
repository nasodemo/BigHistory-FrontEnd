"use client"

import React from 'react';
import styles from './styles.module.css';

interface BoxProps {
    children: any; 
  }

const Box: React.FC<BoxProps> = ({ children }) => {
  return (<div> 
            <form className={styles.prettyBox}>{children}</form> 
          </div>)
};

export default Box;