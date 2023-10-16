"use client"

import React from 'react';
import styles from './roundbox.module.css'

type RoundboxProps = {
  children: React.ReactNode;
};

const Roundbox: React.FC<RoundboxProps> = ({ children }) => {
  return <div className={styles.Roundbox}>{children}</div>;
};

export default Roundbox;