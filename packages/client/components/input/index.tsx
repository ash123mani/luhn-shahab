import React from "react";

import styles from './style.module.css';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', errMsg, onChange }) => {
  return (
    <div className={styles[ 'input-container' ]}>
      <input type={type} placeholder={placeholder} className={styles[ 'input' ]} onChange={onChange} />
      <div className={styles.error}>{errMsg}</div>
    </div>
  )
}

export default Input;