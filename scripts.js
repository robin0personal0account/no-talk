function showForgivenessSection() {
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('forgiveness-section').classList.remove('hidden');
}

function handleForgiveness(isForgiven) {
    const characterImg = document.querySelector('.character img');
    const responseMessage = document.getElementById('response-message');
    const responseText = document.getElementById('response-text');
    const responseImage = document.getElementById('response-image');
    const confettiContainer = document.getElementById('confetti');

    responseMessage.classList.remove('hidden');
    document.getElementById('forgiveness-section').classList.add('hidden');

    if (isForgiven) {
        characterImg.classList.add('happy');
        responseText.textContent = "You’ve made a wonderful awesome super decison  ♥";
        // Reference the local image
        responseImage.innerHTML = '<img src="img/Doraemon.jpg" alt="Happy Image">';
        triggerConfetti();
    } else {
        characterImg.classList.add('sad');
        responseText.textContent = "I’ll keep trying until you do!";
        // Reference the local image
        responseImage.innerHTML = '<img src="img/crying.jpg" alt="Sad Image">';
    }
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}
