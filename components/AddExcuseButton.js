function AddExcuseButton() {
    const addExcuse = document.createElement('button')
    addExcuse.textContent = 'Ajouter une excuse'
    addExcuse.classList.add('add-excuse-button')
    addExcuse.addEventListener('click', () => {
        const modale = document.querySelector('.modale')
        modale.classList.add('modale-visible')
    })
    return addExcuse
}

export default AddExcuseButton