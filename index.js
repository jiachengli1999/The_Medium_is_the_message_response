function toggleImage() {
    let image = document.getElementById('lightbulb_img')
    let text = document.getElementById('button-text')
    console.log('clicked')
    console.log(image.style.visibility)
    image.style.visibility = (image.style.visibility === 'hidden' || image.style.visibility === '') 
                            ? 'visible' : 'hidden'
    text.innerHTML = text.innerHTML === 'off' ? 'on' : 'off'
}