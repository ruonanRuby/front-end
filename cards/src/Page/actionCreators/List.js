import dataLayer from "../dataLayer";
console.log("in here");
export const Actions = {
    GetListSuccess: "GetListSuccess"
};

export function loadList(dispatch) {
    dataLayer.getEvents().then(res => {
        dispatch({
            type: Actions.GetListSuccess,
            data: res.posts,
        });
    });
} 