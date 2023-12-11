// const addMovieModal = document.body.childre[1]
// const addMovieModal = document.querySelector('#add-modal')
const addMovieModal = document.getElementById('add-modal')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const startAddMovieButton = document.querySelector('header button')
// const backdrop = document.body.firstElementChild
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn---passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
// const userInputs = addMovieModal.getElementsByTagName('input')
const userInputs = addMovieModal.querySelectorAll('input')


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
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)