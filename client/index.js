import fakedata from "./fakedata.js"

const BODY = document.getElementsByTagName("body")[0];

const render = data => BODY.innerHTML = data;

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(fakedata) }, 200);
    })
}

// setInterval(() => {
//     getData().then(data => render(data));
// }, 500)


getData().then(data => render(data));