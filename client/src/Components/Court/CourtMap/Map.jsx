import React, {useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import "../../../Css/Supplier Panel/courtcreation.css"

function Map({infoSupplier, setInfoSupplier}) {
 

const [address, setAddress] = useState("")
const [, setCoordinate] = useState({
  lat:null,
  lng:null
})

const handlerSelect = async value =>{
  const result = await geocodeByAddress(value)
  const latlng = await getLatLng(result[0])
  console.log("Q TRAE LATLNG",latlng)
  console.log("QUE TRAE RESULT", result[0].formatted_address)
  setAddress(value)
  console.log("QUE HAY EN VALUE", value)
  setCoordinate(latlng)
  setInfoSupplier({...infoSupplier, coordinates:`${latlng.lat} ${latlng.lng}`, address:`${result[0].formatted_address}`})
}
  return (
    
    <div className='Map'>
      
       <PlacesAutocomplete
       className="input-map-cc"
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
                  <div className="get-suggestion"
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className="get-suggestion-descrip">{suggestion.description}</span>
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
