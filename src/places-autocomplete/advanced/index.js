import React, { useState } from 'react'
import { AutoComplete, Button } from 'antd'
import { getGeocode } from 'use-places-autocomplete'
import usePlacesConfig from '../hooks/places-config'
import addressDetailsFromSuggestion from '../services/address-details-from-suggestion'

const defaultAddressValidator = addressComponents => {
  const { address, city, state, zip } = addressComponents
  return address && city && state && zip
}

const buildEnterAddressManuallyOption = () => ({
  text: "Can't find address? enter it manually",
  value: JSON.stringify({ isManuallyOption: true }),
})

const getFirstSuggestion = suggestions => suggestions[0]

const addressComponentsFromSuggestion = suggestion => addressDetailsFromSuggestion(suggestion)

const isEnterAddressManuallyOption = whichOption => whichOption.isManuallyOption

/**
 * (franco.montenegro)
 * This components acts as a wrapper. It allows users to search for an
 * address with Google's maps suggestions. If no address is found, we display
 * the children of this component (intended to contain the fields for
 * the user to manually complete the address fields).
 *
 * This is required since we have had cases where addresses are new constructions
 * and thus, they are not yet visible for Google's results.
 *
 * As an additional note, there are some cases where addresses returned by
 * Google have missing fields (zip code is a very common one). If this is the
 * case, the component will display the children to let the user manually
 * complete the missing value. By default, we use @defaultAddressValidator to
 * validate addresses. If this function returns false, we will display
 * the manual fields. The validator can be configured by passing @isValidAddress
 * to the properties.
 */
export default function PlacesAutocompleteAdvanced({
  onChange,
  isValidAddress = defaultAddressValidator,
  initialMaskValue = '',
  children,
  ...props
}) {
  const {
    suggestions: { data },
    setValue,
  } = usePlacesConfig()
  const [inputMask, setInputMask] = useState(initialMaskValue)
  const [autocompleteVisible, setAutocompleteVisible] = useState(true)

  const askGoogleForResults = value => {
    setValue(value)
  }

  const getOptionsForAutocomplete = () => {
    const suggestionsFromGoogle = data
    const suggestions = suggestionsFromGoogle.map(suggestion => {
      const { description } = suggestion
      return {
        text: description,
        // (franco.montenegro) Antd's autocomplete only allows
        // strings as values, this is why we have to play around with
        // JSON.stringify
        value: JSON.stringify(suggestion),
      }
    })

    const enterAddressManually = buildEnterAddressManuallyOption()

    return [...suggestions, enterAddressManually]
  }

  const handleSelect = value => {
    const option = JSON.parse(value)
    const { place_id } = option

    if (isEnterAddressManuallyOption(option)) {
      hideAutocompleteAndDisplayManualFields()
      return
    }

    getGeocode({ placeId: place_id })
      // Google returns an array even if we ask for 1 result
      .then(getFirstSuggestion)
      .then(addressComponentsFromSuggestion)
      .then(addressComponents => {
        onChange(addressComponents)

        const validAddress = isValidAddress(addressComponents)
        if (!validAddress) setAutocompleteVisible(false)
      })
  }

  const displayAutocomplete = () => {
    setInputMask('')
    setAutocompleteVisible(true)
  }

  const hideAutocompleteAndDisplayManualFields = () => {
    setAutocompleteVisible(false)
  }

  return (
    <>
      <section style={{ display: autocompleteVisible ? 'block' : 'none' }}>
        <AutoComplete
          {...props}
          value={inputMask}
          dataSource={getOptionsForAutocomplete()}
          onSearch={askGoogleForResults}
          onSelect={handleSelect}
          onChange={setInputMask}
        />
      </section>
      <section style={{ display: !autocompleteVisible ? 'block' : 'none' }}>
        <Button onClick={displayAutocomplete}>Search for address</Button>
        <div>{children}</div>
      </section>
    </>
  )
}
