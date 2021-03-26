import React from 'react'
import { Input } from 'antd'
import classnames from 'classnames'
import style from './style.module.scss'

export default function FavorAppsInput({ className, ...props }) {
  const css = classnames(className, style.input)
  return <Input {...props} className={css} />
}
