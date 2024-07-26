document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('auto-type-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Ajusta el tiempo (en milisegundos) para la velocidad de escritura
        }
    }

    typeWriter();
});