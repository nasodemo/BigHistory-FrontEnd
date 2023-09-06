"use client"

import React, {ReactNode} from 'react';
import styles from './Home.module.css'
import Link from 'next/link';


interface BoxProps {
    children: ReactNode; // 타입으로 children을 정의
  }

const Login: React.FC<BoxProps> = ({ children }) => {
  return (
    <Link href="/loginpage" style={{textDecoration:'none'}}>
        <div className={styles.loginBox}>{children}</div>
    </Link>
  );
};

export default Login;

