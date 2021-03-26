import React from 'react'
import CurrencyInput from 'react-currency-input'
import classnames from 'classnames'
import styles from './style.module.scss'

export default function FavorAppsCurrencyInput({ className, onChange, ...props }) {
  const handleChange = (event, maskedValue, floatValue) => {
    onChange(`${floatValue}`)
  }
  return (
    <CurrencyInput
      {...props}
      className={classnames(className, styles.input)}
      prefix="$"
      precision="2"
      onChangeEvent={handleChange}
    />
  )
}
