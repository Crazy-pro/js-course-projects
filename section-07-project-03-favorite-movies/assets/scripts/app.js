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
const deleteMovieModal = document.getElementById('delete-modal')

const movies = []

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const closeMovieModal = () => {
    addMovieModal.classList.toggle('visible')
}

const showMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
}

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const closeMovieDeletionModal = () => {
    toggleBackdrop()
    deleteMovieModal.classList.remove('visible')
}

const deleteMovieHandler = movieId => {
    let movieIndex = 0
    for (const movie of movies) {
        if (movie.id === movieId) {
            break
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    const rootList = document.getElementById('movie-list')
    rootList.children[movieIndex].remove()
    // rootList.removeChild(rootList.children[movieIndex])
    closeMovieDeletionModal()
    updateUI()
}

const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible')
    toggleBackdrop()

    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive')
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger')

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true))

    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger')

    // confirmDeletionBtn.removeEventListener('click', deleteMovieHandler.bind(null, movieId)) // won't work
    cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal)

    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal)
    confirmDeletionBtn.addEventListener('click', deleteMovieHandler.bind(null, movieId))
    // deleteMovie(movieId)
}

const renderNewMovie = (movie) => {
    const newMovieElement = document.createElement('li')
    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${movie.image}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${movie.title}</h2>
        <p>${movie.rating}/5 stars</p>
    </div>
    `
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, movie.id))
    const rootList = document.getElementById('movie-list')
    rootList.append(newMovieElement)
}

const backdropClickHandler = () => {
    closeMovieModal()
    closeMovieDeletionModal()
    clearMovieInputs()
}

const cancelAddMovieHandler = () => {
    closeMovieModal()
    toggleBackdrop()
    clearMovieInputs()
}

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = ''
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageUrlValue = userInputs[1].value
    const ratingValue = userInputs[2].value

    if (
        titleValue.trim() === '' ||
        imageUrlValue === '' ||
        ratingValue === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid NOT EMPTY values (rating should be between 1 and 5!)')
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
    closeMovieModal()
    toggleBackdrop()
    clearMovieInputs()
    renderNewMovie(newMovie)
    updateUI()
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)