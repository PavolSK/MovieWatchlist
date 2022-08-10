import {Movie} from "./Movie.js"
import {savedMovies} from "./localstorage.js"



if(savedMovies.length){
    document.getElementById("saved-movies").innerHTML = ""
    for(let i = 0; i < savedMovies.length; i++){
        const movie = new Movie(savedMovies[i])
        document.getElementById("saved-movies").innerHTML += movie.render("➖", "Remove")
        if(i === savedMovies.length - 1){
                    const btnChosen = document.querySelectorAll(".btn-chosen")
                    for(let i = 0; i < savedMovies.length; i++){
                        btnChosen[i].addEventListener("click", movie.del)
                    } // end of for
                } // end of if
    } // end of for
} //end of if
    


function deleteItem(index){
    
} // end of deleteItem() function


