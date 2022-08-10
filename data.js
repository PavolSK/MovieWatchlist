let foundedMovies = []

document.getElementById("movie-title").addEventListener("keyup", function(event){
    event.preventDefault()
    let movieTitle = document.getElementById("movie-title").value 
    // Get searching movies
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=cec8f8b7&s=${movieTitle}`)
        .then(res => res.json())
        .then(data => {
            if(data.Search){
                for(let i = 0; i < data.Search.length; i++){   
                 fetch(`https://www.omdbapi.com/?apikey=cec8f8b7&i=${data.Search[i].imdbID}`)
                    .then(response => response.json())
                    .then(movie => { 
                        foundedMovies.push(movie)
                        
                    }) // end of second fetch ----- movie
                } //end of for 
            } // end of if
    }) // end of first fetch ----- data
}) // end search button

export {foundedMovies}