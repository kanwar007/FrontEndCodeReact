import React from 'react'

import style from '../styles/modules/button.module.scss'

function Button({children}) {
  return (
    <Button className={style.button} type="button"> {children}</Button>
  )
}

export default Button

