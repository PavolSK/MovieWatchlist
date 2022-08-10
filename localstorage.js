let savedMovies

if(!localStorage.getItem('savedMovies')) {
    savedMovies = []
} else {
    savedMovies = JSON.parse(localStorage.getItem('savedMovies'))
}

export {savedMovies}