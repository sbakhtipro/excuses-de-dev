function Error404() {
    const error = document.createElement('h1')
    error.textContent = 'Erreur 404'
    error.classList.add('error')
    return error
}

export default Error404