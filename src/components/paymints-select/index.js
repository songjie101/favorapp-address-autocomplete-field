import React from 'react'
import { Select } from 'antd'
import classnames from 'classnames'
import style from './style.module.scss'

export default function FavorAppsSelect({ className, disabled, value, ...props }) {
  const css = classnames(className, style.select, {
    [style.hasValue]: value !== undefined,
    [style.disabled]: disabled,
  })
  return <Select {...props} value={value} disabled={disabled} className={css} />
}
