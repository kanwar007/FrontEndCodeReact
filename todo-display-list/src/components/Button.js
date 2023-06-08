import React from 'react';

import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonType={
    primary:'primary',
    secondary:'seconday'
}

function Button({children,  vari='primary'}) {
  return (
    <button className={getClasses([styles.Button, styles[`button--${buttonType[vari]}`]])} type="button"> {children}</button>
  )
}

export default Button

