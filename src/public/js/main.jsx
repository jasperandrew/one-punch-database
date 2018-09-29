function queryFromURL() {
    const url = window.location.href,
        start = url.indexOf('?') + 1,
        query = {};

    if(start === 0) return { error: 'No query' };

    const end = (url.indexOf('#') + 1 || url.length + 1) - 1,
        params = url.slice(start, end);

    if(params.length < 1) return { error: 'No query' };
    
    const pairs = params.replace(/\+/g, ' ').split('&');

    pairs.forEach(pair => {
        let p = pair.split('=', 2);
        let name = decodeURIComponent(p[0]).trim(), // setting name
            val = decodeURIComponent(p[1]); // setting value
        query[name] = val;
    });

    return query;
}

function getData() {
    var query = queryFromURL();
    if(query.hasOwnProperty('search')){
        fetch('/get?name=' + query.search)
        .then(response => response.json())
        .then(data => {
            data = data[0];
            console.log(data);
            // for(field in data){
            //     if(data[field]){
            //         if(document.querySelector('input[placeholder=' + field + ']')){
            //             document.querySelector('input[placeholder=' + field + ']').value = data[field];
            //         }
            //     }
            // }
        })
        .catch(error => console.error('[ERROR] ' + error));    
    }
}