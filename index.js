function toggleImage() {
    let image = document.getElementById('lightbulb_img')
    let text = document.getElementById('button-text')
    console.log('clicked')
    console.log(image.style.visibility)
    image.style.visibility = (image.style.visibility === 'hidden' || image.style.visibility === '') 
                            ? 'visible' : 'hidden'
    text.innerHTML = text.innerHTML === 'off' ? 'on' : 'off'
}

function displayLight() {
    let light_sec = document.getElementById('light-section')
    let content_sec = document.getElementById('content-section')
    let body_sec = document.getElementById('body')
    if (light_sec.style.display === 'none' || light_sec.style.display === ''){
        light_sec.style.display = 'flex'
        content_sec.style.display = 'none'
        body_sec.style.backgroundColor = 'black'
    }
    else{
        light_sec.style.display = 'none'
        content_sec.style.display = 'flex'
        body_sec.style.backgroundColor = 'peachpuff'
    }
}