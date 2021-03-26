import React from 'react'
import classNames from 'classnames'
import { Button } from 'antd'
import styles from './style.module.scss'

const ICON_BUTTON_TYPE = {
  PRIMARY: 'primary',
  BLUE: 'blue',
  DARK: 'dark',
}

export { ICON_BUTTON_TYPE }

export default function FavorAppsIconButton({ type, className, ...props }) {
  const css = classNames(className, styles.button, {
    [styles.primary]: type === ICON_BUTTON_TYPE.PRIMARY,
    [styles.blue]: type === ICON_BUTTON_TYPE.BLUE,
    [styles.dark]: type === ICON_BUTTON_TYPE.DARK,
  })
  return <Button className={css} {...props} />
}
