import {savedMovies} from "./localstorage.js"

class Movie {
    constructor(data){
        Object.assign(this, data)
    }
    
    render(emoji, text){
        let {Poster, Plot, Title, imdbID, imdbRating, Runtime, Genre} = this
        // Get rid of N/A data
                        if(Poster === "N/A") {
                            Poster = "img/unavailable.jpg"
                        } else if(Plot === "N/A" ){
                            Plot = "Unavailable plot."
                        } else if(Title === "N/A" ){
                            Title = "Unavailable"
                        } else if(imdbRating === "N/A" ){
                            imdbRating = "Unavailable"
                        } else if(Runtime === "N/A" ){
                            Runtime = "Unavailable"
                        } else if(Genre === "N/A" ){
                            Genre = "Unavailable"
                        }
                        
                        return `
                            <div id="one-movie">
                                <img src="${Poster}">
                                <div class="movie-info">
                                    <div class="movie-header">
                                        <h3>${Title}</h3>
                                        <p>⭐ ${imdbRating}</p>
                                    </div>
                                    <div class="movie-genre">
                                        <p>${Runtime}</p>
                                        <p>${Genre}</p>
                                        <button id="${imdbID}" class="btn-chosen">${emoji}&nbsp${text}</button>
                                    </div>
                                    <div class="movie-plot">
                                        <p>${Plot}</p>
                                    </div>
                                </div>
                            </div><hr>`
                            document.getElementById("founded-movies").innerHTML = html
    } // end of function render()
    
    save(){
        document.getElementById(`${this.id}`).innerHTML = "✔️&nbspAdded"
        document.getElementById(`${this.id}`).disabled = true 
        fetch(`https://www.omdbapi.com/?apikey=cec8f8b7&i=${this.id}`)
            .then(res => res.json())
            .then(data => {
                savedMovies.push(data)
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            }) // end of fetch ------- data
    } // end of function save()
    
    del(){
        document.getElementById(`${this.id}`).innerHTML = "❌&nbspRemoved"
        document.getElementById(`${this.id}`).disabled = true
        for(let i = 0; i < savedMovies.length; i++) {
            if(savedMovies[i].imdbID === this.id){
                savedMovies.splice(savedMovies.findIndex( j => j.imdbID === this.id), 1)
            } // end of if
        } // end of for
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    } // end of function del()
}

export {Movie}