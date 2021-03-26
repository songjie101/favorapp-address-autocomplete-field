import React from 'react'
import { AutoComplete } from 'antd'
import usePlacesConfig from '../hooks/places-config'

export default function PlacesAutocompleteSimple(props) {
  const {
    suggestions: { data },
    setValue,
  } = usePlacesConfig()

  const askGoogleForResults = value => {
    setValue(value)
  }

  const getOptions = () =>
    data.map(suggestion => {
      const { description } = suggestion
      return description
    })

  return <AutoComplete {...props} dataSource={getOptions()} onSearch={askGoogleForResults} />
}
