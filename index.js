function toggleImage() {
    let image = document.getElementById('lightbulb_img')
    let text = document.getElementById('button-text')
    console.log('clicked')
    image.style.visibility = image.style.visibility === 'hidden' ? 'visible' : 'hidden'
    text.innerHTML = text.innerHTML === 'off' ? 'on' : 'off'
}