function firstAddressComponentFromSuggestion(googleSuggestion, types) {
  const emptyComponent = {}
  if (typeof googleSuggestion !== 'object') return emptyComponent

  const { address_components } = googleSuggestion
  if (typeof address_components !== 'object') return emptyComponent
  if (typeof address_components.find !== 'function') return emptyComponent

  const typeInRequiredTypes = type => types.includes(type)

  const addressWithAnyRequiredType = component => {
    if (typeof component !== 'object') return false

    const { types } = component
    if (typeof types !== 'object') return false
    if (typeof types.find !== 'function') return false

    return types.find(typeInRequiredTypes)
  }

  return address_components.find(addressWithAnyRequiredType) || emptyComponent
}

function addressFromSuggestion(googleSuggestion) {
  return googleSuggestion.formatted_address
}

function streetNumberFromSuggestion(googleSuggestion) {
  const streetNumber = firstAddressComponentFromSuggestion(googleSuggestion, ['street_number'])
  return streetNumber.long_name
}

function cityFromSuggestion(googleSuggestion) {
  const city = firstAddressComponentFromSuggestion(googleSuggestion, ['locality'])
  return city.long_name
}

function stateFromSuggestion(googleSuggestion) {
  const state = firstAddressComponentFromSuggestion(googleSuggestion, [
    'administrative_area_level_1',
  ])
  return state.long_name
}

function zipFromSuggestion(googleSuggestion) {
  const zip = firstAddressComponentFromSuggestion(googleSuggestion, ['postal_code'])
  return zip.long_name
}

export default function addressDetailsFromSuggestion(googleSuggestion) {
  const address = addressFromSuggestion(googleSuggestion)
  const streetNumber = streetNumberFromSuggestion(googleSuggestion)
  const city = cityFromSuggestion(googleSuggestion)
  const state = stateFromSuggestion(googleSuggestion)
  const zip = zipFromSuggestion(googleSuggestion)
  return {
    address,
    streetNumber,
    city,
    state,
    zip,
  }
}
