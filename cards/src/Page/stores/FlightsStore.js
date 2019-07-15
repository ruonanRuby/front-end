import BaseStore from "./BaseStore";
import { Actions } from "../actionCreators/GetFlight";

class FlightsStore extends BaseStore {
    constructor() {
        super();
        this.registerReducer(Actions.GetFlightsSuccess, this.onGetFlightsSuccess);
    }

    get name() {
        return 'flightsStore';
    }

    get defaultState() {
        return {
            flights: undefined
        };
    }

    onGetFlightsSuccess(state,action) {
        console.log(action.data);
        return Object.assign({}, state, {
            flights: action.data
        });
    }
}

export default FlightsStore;
