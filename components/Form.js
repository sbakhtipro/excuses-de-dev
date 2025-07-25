function Form() {
    const modale = document.createElement('div')
    modale.classList.add('modale')
    const form = document.createElement('form')
    form.classList.add('form')
    form.method = 'POST'
    form.action = 'http://excuses-de-dev/back/index.php?action=insert-excuse'
    const tagInputLabel = document.createElement('label')
    tagInputLabel.htmlFor = 'tag-input'
    tagInputLabel.textContent = 'Tag :'
    const tagInput = document.createElement('input')
    tagInput.type = 'text'
    tagInput.placeholder = 'Tag'
    tagInput.name = 'tag-input'
    tagInput.id = 'tag-input'
    tagInput.required = true
    const textareaLabel = document.createElement('label')
    textareaLabel.htmlFor = 'textarea'
    textareaLabel.textContent = 'Excuse :'
    const textarea = document.createElement('textarea')
    textarea.name = 'insert-excuse'
    textarea.placeholder = 'Votre excuse...'
    textarea.id = 'textarea'
    textarea.required = true
    const close = document.createElement('button')
    close.classList.add('close-button')
    close.type = 'button'
    close.textContent = 'x'
    close.addEventListener('click', () => {
        const modale = document.querySelector('.modale')
        modale.classList.remove('modale-visible')
    })
    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'Envoyer'
    form.appendChild(tagInputLabel)
    form.appendChild(tagInput)
    form.appendChild(textareaLabel)
    form.appendChild(textarea)
    form.appendChild(submit)
    form.appendChild(close)
    modale.appendChild(form)
    return modale
}

export default Form;