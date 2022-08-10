import {Movie} from "./Movie.js"
import {foundedMovies} from "./data.js"

document.getElementById("btn-search").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById("btn-search").disabled = true
    document.getElementById("movie-title").disabled = true
    document.getElementById("founded-movies").innerHTML = `<div class="movies-placeholder"><img src="img/searching.gif"></div>`
    setTimeout(function(){
        if(foundedMovies.length){
            document.getElementById("founded-movies").innerHTML = ""
            for(let i = 0; i < foundedMovies.length; i++){
                const movie = new Movie(foundedMovies[i])
                document.getElementById("founded-movies").innerHTML += movie.render("➕", "Watchlist")
                if(i === foundedMovies.length - 1){
                    const btnChosen = document.querySelectorAll(".btn-chosen")
                    for(let i = 0; i < foundedMovies.length; i++){
                        btnChosen[i].addEventListener("click", movie.save)
                    } // end of for
                } // end of if
            } // end of for
        } else {
            document.getElementById("founded-movies").innerHTML = `<p class="movies-placeholder">Unable to find what you’re looking for. Please try another search.</p>`
        } // end of else
        document.getElementById("btn-search").disabled = false
        document.getElementById("movie-title").disabled = false
    }, 3000) // end of setTimeout
}) // end of addEventListener

