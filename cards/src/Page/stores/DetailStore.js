import BaseStore from "./BaseStore";

const Actions = {

}

class DetailStore extends BaseStore {
    constructor() {
        super();

    }

    get name() {
        return 'detailStore';
    }

    get defaultState() {
        return {};
    }
}

export default DetailStore;