import fakedata from "./fakedata.js"

const BODY = document.getElementsByTagName("body")[0];

const render = data => BODY.innerHTML = data;

const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('/getdata').then(rawData => {
            rawData.text().then(tableData => {
                resolve(tableData);
            })
        },
            err => {
                console.log(err);
            }
        );
    })
}

setInterval(() => {
    getData().then(data => render(data));
}, 1000)
