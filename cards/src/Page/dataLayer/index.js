const host = "http://localhost:8000";
const getEvents = () => {
    return fetch(`${host}/`).then(raw => raw.json())
}

const getFlight = () => {
    return fetch(`${host}/flights/0`).then(raw => raw.json())
}

const createEvent = (event) => {
   return fetch(`${host}/post`,{
        method:"POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(event)
    })
    .then (rawRes => rawRes.json());
}

export default {
    getEvents,
    createEvent,
    getFlight
}