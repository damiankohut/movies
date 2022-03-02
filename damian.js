window.addEventListener('DOMContentLoaded', () => {

    fetch("https://api.themoviedb.org/3/search/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&query=spiderman")
    .then(response => (response.json()))
    .then(data =>  console.log(data.results))
})


// this is for the title data.results[0].original_title
// this is for the description data.results[0].overview
//this is for teh release date data.results[0].release_date
//this is for the img data.results[0].poster_path
const input2 = document.getElementById('code2');
const work = document.getElementById("submit2");
work.addEventListener('click', () => {
    getpokemon(input2.value)
})


function getpokemon(pokemon){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&query=${pokemon}&page=1&include_adult=false`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        document.getElementById('box').innerHTML = `
        <h5>${data.results[0].original_title}</h5>
        <img src = 'https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}' width = "240px" height = "200px">
        <p id="text">${data.results[0].overview}</p>
        <p id = "text"> Release ${data.results[0].release_date} </p>
        `
    })
}

