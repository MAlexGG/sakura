export const sakuraService = () => {

    const url = 'https://protected-taiga-89091.herokuapp.com/api/card';
    
    const customFetch = (endpoint, options) => {
        const defaultHeaders = {
            accept: "application/json"
        };

        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders; 
        
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options).then((res) => res.ok ? res.json() : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "An error ocurred"
        })).catch((err) => err);

    };
    
    const getAll = (options = {}) => customFetch(url, options);

    return {
        getAll
    }
}