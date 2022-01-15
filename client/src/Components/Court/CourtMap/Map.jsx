import React, {useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function Map({infoCourt, setInfoCourt}) {
 

const [address, setAddress] = useState("")
const [ coordinate, setCoordinate] = useState({
  lat:null,
  lng:null
})

const handlerSelect = async value =>{
  const result = await geocodeByAddress(value)
  const latlng = await getLatLng(result[0])
  console.log("Q TRAE LATLNG",latlng)
  setAddress(value)
  setCoordinate(latlng)
  setInfoCourt({...infoCourt, address:`${latlng.lat} ${latlng.lng}`})
}
  return (
    
    <div className='Map'>
      
       <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handlerSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Buscar Dirección ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Cargando...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default Map;