import { combineReducers } from "redux";
import titularReducers from "./titularReducer";
import adherentesReducers from './adherentesReducers';
import pagosReducers from './pagosReducers';
import pagobcoReducers from './pagobcoReducers';

export default combineReducers({
    titulares: titularReducers,
    adherentes: adherentesReducers,
    pagos: pagosReducers,
    pagobco: pagobcoReducers
});