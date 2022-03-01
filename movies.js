window.addEventListener('DOMContentLoaded', () => {
    const moviesAPI = "https://api.themoviedb.org/3/discover/movie?api_key=3c8d31b949ad58738c6e56fd0522a70a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    fetch(moviesAPI)
    .then(respone => respone.json())
    .then(data => console.log(data))
})