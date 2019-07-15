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
            //modify css
            document.body.setAttribute("data-flights", res.flights.join(" "));
        })
    }, 1000)
}   