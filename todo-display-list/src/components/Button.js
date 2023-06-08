import React from 'react'

import style from '../styles/modules/button.module.scss'
import { getClasses } from '../utils/getClasses'

const buttonType={
    primary:'primary',
    secondary:'seconday'
}

function Button({children,  varicant="primary"}) {
  return (
    <button className={getClasses([style.Button,style[`button--${buttonType[varicant]}`]])} type="button"> {children}</button>
  )
}

export default Button

