// const addMovieModal = document.body.childre[1]
// const addMovieModal = document.querySelector('#add-modal')
const addMovieModal = document.getElementById('add-modal')

// const startAddMovieButton = document.querySelector('header').lastElementChild
const startAddMovieButton = document.querySelector('header button')

// const backdrop = document.body.firstElementChild
const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton = addMovieModal.querySelector('.btn---passive')

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

const cancelAddMovie = () => {
    toggleMovieModal()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovie)