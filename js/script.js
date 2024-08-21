const textoEntrada = document.querySelector('#textoEntrada');
const textoSalida = document.querySelector('#textoSalida');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const btnCopiar = document.querySelector('#btnCopiar');


const mapeoEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar(texto) {
    return texto.replace(/[aeiou]/g, letra => mapeoEncriptacion[letra]);
}

function desencriptar(texto) {
    return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => {
        return Object.keys(mapeoEncriptacion).find(key => mapeoEncriptacion[key] === palabra);
    });
}

function validarEntrada(texto) {
    return /^[a-z\s]*$/.test(texto);
}

function procesarTexto(operacion) {
    const textoOriginal = textoEntrada.value.toLowerCase();
    if (!validarEntrada(textoOriginal)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    textoSalida.value = operacion === 'encriptar' ? encriptar(textoOriginal) : desencriptar(textoOriginal);
}

btnEncriptar.addEventListener('click', () => procesarTexto('encriptar'));
btnDesencriptar.addEventListener('click', () => procesarTexto('desencriptar'));

btnCopiar.addEventListener('click', () => {
    textoSalida.select();
    document.execCommand('copy');
    // Alternativa moderna:
    // navigator.clipboard.writeText(textoSalida.value);
    alert("Texto copiado al portapapeles");
});