/**
https://dummyjson.com/quotes
https://dummyjson.com/todos
https://jsonplaceholder.typicode.com/photos
https://randomuser.me/api/
https://pokeapi.co/api/v2/pokemon/ditto
 */

//API-1
const URL = 'https://dummyjson.com/quotes'
fetch(URL).then(response=>response.json()
).then(data=>{
    for (let i = 0; i<=data.quotes.length;i++){
        console.log(data.quotes[i])
    }
});

// API-2
const URL_1 = 'https://dummyjson.com/todos';
fetch(URL_1)
    .then(res=>res.json())
    .then(data=>console.log(data))

// API-3
const URL_2 = 'https://jsonplaceholder.typicode.com/photos';
fetch(URL_2)
    .then(res=>res.json())
    .then(data=>console.log(data))

// API-4
const URL_3 = 'https://randomuser.me/api/';
fetch(URL_3)
    .then(res=>res.json())
    .then(data=>console.log(data))

// API-5
const URL_4 = 'https://pokeapi.co/api/v2/pokemon/ditto';
fetch(URL_4)
    .then(res=>res.json())
    .then(data=>console.log(data))