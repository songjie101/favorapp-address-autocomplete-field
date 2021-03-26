import React from 'react'
import { Table } from 'antd'
import classnames from 'classnames'
import style from './style.module.scss'

export default function FavorAppsTable({ className, ...props }) {
  const css = classnames(className, style.table)
  return <Table className={css} {...props} />
}
