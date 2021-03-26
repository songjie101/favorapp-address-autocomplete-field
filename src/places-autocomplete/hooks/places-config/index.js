import usePlacesAutocomplete from 'use-places-autocomplete'

/**
 * (franco.montenegro)
 * Just a simple hook to define some places default configs
 * used in LemonBrew
 *
 * All additional properties can be found in the following link
 * @see https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
 */
export default function usePlacesConfig(additionalProps) {
  return usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: ['us'] },
      types: ['address'],
    },
    debounce: 300,
    ...additionalProps,
  })
}
