import GenerateExcuseButton from "./GenerateExcuseButton"
import AddExcuseButton from "./AddExcuseButton"
import Form from "./Form"

function Home() {
    const params = new URLSearchParams(window.location.search)
    const success = params.get('insert') === 'true';
    if (success) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    if (success) {
        const successFeedback = document.createElement('p')
        successFeedback.textContent = "L'excuse a été ajoutée avec succès!"
        successFeedback.classList.add('success-feedback')
        document.body.appendChild(successFeedback)
        setTimeout(() => {
            successFeedback.style.display = 'none'
        }, 3500);
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    const home = document.createElement('div')
    home.classList.add('home')
    const title = document.createElement('h1')
    title.textContent = 'Excuses de dev'
    home.appendChild(title)
    const excuse = document.createElement('p')
    excuse.classList.add('excuse')
    home.appendChild(excuse)
    const excuseButton = GenerateExcuseButton()
    home.appendChild(excuseButton)
    const form = Form()
    home.appendChild(form)
    const addExcuseButton = AddExcuseButton()
    home.appendChild(addExcuseButton)
    let actualExcuse = null
    excuseButton.addEventListener('click', () => {
        fetch('http://excuses-de-dev/back/index.php?action=get-excuse' + (actualExcuse !== null ? '&actualExcuse=' + actualExcuse : ''))
            .then(response => {
                if (!response.ok) {
                    throw new Error('erreur : ' + response.status)
                }
                return response.json()
            })
            .then(data => {
                excuse.textContent = data.message
                actualExcuse = data.http_code
            })
        })
    return home
}

export default Home