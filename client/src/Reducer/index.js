
import { REGISTER } from "../Actions/actions"


const initialState = {
  registry: [],
  };
  
  function rootReducer (state = initialState, action){
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          registry: state.registry.concat(action.payload),
        };     
     
      default:
        return state;
    }
  };
  
  export default rootReducer;

