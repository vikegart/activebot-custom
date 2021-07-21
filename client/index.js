const BODY = document.getElementsByTagName("body")[0];

const saveScroll = () => {
    const wrapper = document.getElementsByClassName('table');
    if (wrapper.length) {
        let scrollWrapper = wrapper[0].parentElement;
        return [scrollWrapper.scrollLeft, scrollWrapper.scrollTop];
    } else {
        return [0,0];
    }
}

const revertScroll = (x,y) => {
    const wrapper = document.getElementsByClassName('table');
    if (wrapper.length) {
        let scrollWrapper = wrapper[0].parentElement;
        scrollWrapper.scrollTo(x,y);
    }
}

const render = data => {
    const [x, y] = saveScroll();
    BODY.innerHTML = data
    revertScroll(x,y);
};


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

const runGetStats = () => {
    setInterval(() => {
        getData().then(data => render(data));
    }, 1000)   
}

document.onload = runGetStats();