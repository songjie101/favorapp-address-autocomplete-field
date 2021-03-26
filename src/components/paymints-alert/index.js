import React from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'

const ALERT_TYPE = {
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
}

export { ALERT_TYPE }

export default function FavorAppsAlert({ type, className, children }) {
  const css = classnames(className, styles.alert, {
    [styles.warning]: type === ALERT_TYPE.WARNING,
    [styles.error]: type === ALERT_TYPE.ERROR,
    [styles.success]: type === ALERT_TYPE.SUCCESS,
    [styles.info]: type === ALERT_TYPE.INFO,
  })
  return <div className={css}>{children}</div>
}
