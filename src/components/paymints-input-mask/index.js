import React from 'react'
import InputMask from 'react-input-mask'
import FavorAppsInput from '../favorapp-input'

const MASK = {
  US_PHONE: '999-999-9999',
}

export { MASK }

export default function FavorAppsInputMask(props) {
  return <InputMask {...props}>{inputProps => <FavorAppsInput {...inputProps} />}</InputMask>
}
