import dataLayer from "../dataLayer";

export function submitPost(values, cb) {
    dataLayer.createEvent(values).then(res => {
        cb();
    });
}