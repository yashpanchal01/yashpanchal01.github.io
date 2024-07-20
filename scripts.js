document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to animate the typewriter effect
    const typewriterElement = document.querySelector('.typewriter');
    const textArray = ['Video Editor', 'Graphic Designer', 'Content Creator'];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typewriterElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            arrayIndex = (arrayIndex + 1) % textArray.length;
            setTimeout(type, 150);
        }
    }

    setTimeout(type, 1500);
});
