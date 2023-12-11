// const addMovieModal = document.body.childre[1]
// const addMovieModal = document.querySelector('#add-modal')
const addMovieModal = document.getElementById('add-modal')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const startAddMovieButton = document.querySelector('header button')
// const backdrop = document.body.firstElementChild
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = document.querySelector('.btn--passive')
// const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const confirmAddMovieButton = document.querySelector('.btn--success')
// const userInputs = addMovieModal.getElementsByTagName('input')
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const movies = []

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0
    for(const movie of movies){
        if(movie.id === movieId){
            break
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    const rootList = document.getElementById('movie-list')
    rootList.children[movieIndex].remove()
    // rootList.removeChild(rootList.children[movieIndex])
}

const renderNewMovie = (movie) => {
    const newMovieElement = document.createElement('li')
    newMovieElement.className = 'movie-element'
    newMovieElement.insertAdjacentHTML = `
    <div class="movie-element__image">
        <img src="${movie.image}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${movie.title}</h2>
        <p>${movie.rating}/ 5 stars</p>
    </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const rootList = document.getElementById('movie-list')
    rootList.append(newMovieElement)
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
}

const backdropClickHandler = () => {
    toggleMovieModal()
}

const cancelMovieHandler = () => {
    toggleMovieModal()
    clearInputs()
}

const clearInputs = () => {
    for(const userInput of userInputs){
        userInput.value = ''
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() === '' || 
        imageUrlValue === '' || 
        ratingValue === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating should be between 1 and 5!)')
        return
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie)
    console.log(movies)
    toggleMovieModal()
    clearInputs()
    renderNewMovie(newMovie)
    updateUI()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)