class Http {
    static get(url) {
        if(typeof url !== 'string') {
            throw new Error();
        }
    }
}