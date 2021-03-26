import React from 'react'
import classNames from 'classnames'
import { Card } from 'antd'
import style from './style.module.scss'

const CARD_TYPE = {
  PRIMARY: 'primary',
  BLUE: 'blue',
  ROUNDED: 'rounded',
  SECONDARY: 'secondary',
  INACTIVE: 'inactive',
}

export { CARD_TYPE }

export default function FavorAppsCard({ type, className, ...props }) {
  const css = classNames(className, style.card, {
    [style.primary]: type === CARD_TYPE.PRIMARY,
    [style.blue]: type === CARD_TYPE.BLUE,
    [style.secondary]: type === CARD_TYPE.SECONDARY,
    [style.inactive]: type === CARD_TYPE.INACTIVE,
    [style.rounded]: type === CARD_TYPE.ROUNDED,
  })
  return <Card className={css} {...props} />
}
