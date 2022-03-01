window.addEventListener('DOMContentLoaded', () => {

    fetch("https://api.themoviedb.org/3/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a")
    .then(respone => respone.json())
    .then(data => console.log(data))
})

