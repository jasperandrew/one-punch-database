"use strict";

function queryFromURL() {
  var url = window.location.href,
      start = url.indexOf('?') + 1,
      query = {};
  if (start === 0) return {
    error: 'No query'
  };
  var end = (url.indexOf('#') + 1 || url.length + 1) - 1,
      params = url.slice(start, end);
  if (params.length < 1) return {
    error: 'No query'
  };
  var pairs = params.replace(/\+/g, ' ').split('&');
  pairs.forEach(function (pair) {
    var p = pair.split('=', 2);
    var name = decodeURIComponent(p[0]).trim(),
        // setting name
    val = decodeURIComponent(p[1]); // setting value

    query[name] = val;
  });
  return query;
}

function getData() {
  var query = queryFromURL();

  if (query.hasOwnProperty('search')) {
    fetch('/get?name=' + query.search).then(function (response) {
      return response.json();
    }).then(function (data) {
      data = data[0];
      console.log(data); // for(field in data){
      //     if(data[field]){
      //         if(document.querySelector('input[placeholder=' + field + ']')){
      //             document.querySelector('input[placeholder=' + field + ']').value = data[field];
      //         }
      //     }
      // }
    }).catch(function (error) {
      return console.error('[ERROR] ' + error);
    });
  }
}