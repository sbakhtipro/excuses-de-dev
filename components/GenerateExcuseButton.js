function GenerateExcuseButton() {
    const generateExcuse = document.createElement('button')
    generateExcuse.textContent = 'Générer une excuse'
    generateExcuse.classList.add('excuse-button')
    return generateExcuse
}

export default GenerateExcuseButton