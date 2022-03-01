window.addEventListener('DOMContentLoaded', () => {
    const moviesAPI = "https://api.themoviedb.org/3/movie/76341?api_key=3c8d31b949ad58738c6e56fd0522a70a"

    fetch("moviesAPI")
    .then(respone => respone.json())
    .then(data => console.log(data))
})