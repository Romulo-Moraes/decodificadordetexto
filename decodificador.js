const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const imagemFundoOriginal = 'url(./assets/whale.png)';

textArea.addEventListener("input", function() {
    
    this.value = this.value.replace(/[^a-z\s]/g, '');
});

function removerImagemDeFundo() {
    mensagem.style.backgroundImage = "none";
}

function restaurarImagemDeFundo(){
    mensagem.style.backgroundImage = imagemFundoOriginal;
}

function btnEncriptar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    removerImagemDeFundo();
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["e" ,"enter",], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    removerImagemDeFundo();
}

function descriptografar(stringDesencriptada) {
    let matrizCodigo = [["e" ,"enter",], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

function copiar() {
    const mensagem = document.querySelector(".mensagem");
    // Usando a API Clipboard moderna
    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert("Texto copiado!");
    });
}

   
function limpar() {
    mensagem.value = "";
    restaurarImagemDeFundo();
    
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
        if (mensagem.value.trim() !== "") {
            removerImagemDeFundo(); // Remove a imagem de fundo se houver texto
        } else {
            restaurarImagemDeFundo(); // Restaura a imagem de fundo se a caixa de mensagem estiver vazia
        }
    });

    observer.observe(mensagem, { attributes: true, childList: true, subtree: true });
});

