//Do emulation of the request to the server to create preloader

const wfm = {
    delay(ms = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms)
        })
    },
    isUndefined(obj) {
        return typeof obj === 'undefined';
    }
};

export { wfm };

