function Lost() {
    const root = document.getElementById('root')
    const lost = document.createElement('h1')
    lost.textContent = "I'm lost :c"
    lost.classList.add('lost')
    fetch('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajN3dm41dDVqcGE2dWVpdnI1aTlyZHZlNzk0NTdneWh0NXZtd3k1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1bAdvIjqaXCSc/giphy.gif')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur : ' + response.status)
            }
            return response.blob()
        })
        .then(blob => {
            const gifURL = URL.createObjectURL(blob)
            const gif = document.createElement('img')
            gif.classList.add('gif')
            gif.src = gifURL
            root.appendChild(gif)
        })
    setTimeout(() => {
        window.location.href = '/';
    }, 5000);
    return lost
}

export default Lost