import React from 'react'
import classNames from 'classnames'
import { Button } from 'antd'
import styles from './style.module.scss'

const BUTTON_TYPE = {
  PRIMARY: 'primary',
  BLUE: 'blue',
  INVERSE: 'inverse',
  LINK: 'link',
  LINK_DARK: 'link-dark',
  INVERSE_BLUE: 'inverse-blue',
  LIGHT_BLUE: 'light-blue',
}

export { BUTTON_TYPE }

export default function FavorAppsButton({ noShadow, pill, block, type, className, ...props }) {
  const css = classNames(className, [styles.button], {
    [styles.primary]: type === BUTTON_TYPE.PRIMARY,
    [styles.blue]: type === BUTTON_TYPE.BLUE,
    [styles.inverse]: type === BUTTON_TYPE.INVERSE,
    [styles.link]: type === BUTTON_TYPE.LINK,
    [styles.linkDark]: type === BUTTON_TYPE.LINK_DARK,
    [styles.inverseBlue]: type === BUTTON_TYPE.INVERSE_BLUE,
    [styles.lightBlue]: type === BUTTON_TYPE.LIGHT_BLUE,
    [styles.block]: block,
    [styles.pill]: pill,
    [styles.noShadow]: noShadow,
  })
  return <Button className={css} {...props} />
}
