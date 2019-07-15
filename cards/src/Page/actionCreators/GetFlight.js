import dataLayer from "../dataLayer";

export const Actions = {
    GetFlightsSuccess: "GetFlightsSuccess"
};

export function getFlight(dispatch) {
    setTimeout(() => {
        dataLayer.getFlight().then(res => {
            dispatch({
                type: Actions.GetFlightsSuccess,
                data: res
            });
        })
    }, 1000)
}   