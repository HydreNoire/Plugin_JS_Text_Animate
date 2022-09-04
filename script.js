let animeText = document.querySelectorAll('.anime_text');

function animateText(animatedText) {
    const text = animatedText.textContent;
    let speed = animatedText.getAttribute('speed');
    let delay = animatedText.getAttribute('delay');

    if (speed == null) {
        speed = 150;
    }

    if (delay == null) {
        delay = 0;
    }

    animatedText.innerHTML = '';

    for(let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            animatedText.innerHTML += ' ';
        }

        animatedText.innerHTML += `<span>${text[i]}</span>`;
    }

    setTimeout( () => {
        let index = 0;
    function writingLetter() {
        const eachSpan = animatedText.querySelectorAll('span')[index];
        eachSpan.classList.add('animated');
        index++;

        if (index == text.length) {
            clearInterval(writingInterval);
        }
    }

    let writingInterval = setInterval(writingLetter, speed);
    }, delay)
}

animeText.forEach(animateText);