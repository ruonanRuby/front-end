import BaseStore from "./BaseStore";

class DetailStore extends BaseStore {

    get name() {
        return 'detailStore';
    }

    get defaultState() {
        return {};
    }
}

export default DetailStore;