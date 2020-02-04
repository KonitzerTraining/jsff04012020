export class Http {
    static get (url) {
        return fetch(url).then((response)=> {
            return response.json();
        })
    }
}