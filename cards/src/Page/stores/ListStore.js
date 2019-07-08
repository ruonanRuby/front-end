import BaseStore from "./BaseStore";
import { Actions } from "../actionCreators/List"

class ListStore extends BaseStore {
    constructor() {
        super();
        this.registerReducer(Actions.GetListSuccess, this.onGetListSuccess);
    }

    get name() {
        return 'listStore';
    }

    get defaultState() {
        return {
            events: []
        };
    }

    onGetListSuccess(state,action) {
        return Object.assign({}, state, {
            events: action.data
        });
    }
}

export default ListStore;
