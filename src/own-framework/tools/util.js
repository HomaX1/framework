const wfm = {
    delay(ms = 1000) {
        return new Promise((resolve, reject) => {
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

