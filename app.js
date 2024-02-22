let textoInput = document.querySelector('.conteudo-principal_entrada_texto_txtarea');
let textoOutput = document.querySelector('.conteudo-principal_resultado_titulo');
let imagemResultado = document.querySelector('.imagem-resultado');
let paragrafoResultado = document.querySelector('.conteudo-principal_resultado_paragrafo');
let butaoCriptografar = document.querySelector('.butao_criptografar');
let butaoDescriptografar = document.querySelector('.butao_descriptografar');
let butaoCopiar = document.querySelector('.butao_copiar');

butaoCriptografar.addEventListener('click', function (event) {
    event.preventDefault();
    let arrayTextoInput = textoInput.value.split('');
    let arrayTextoInputCriptografado = [];
    arrayTextoInput.forEach(letra => { 
        if (letra == 'a') {
            arrayTextoInputCriptografado.push('ai');
            
        }
        else if (letra == 'e') {
            arrayTextoInputCriptografado.push('enter');
        }
        else if (letra == 'i') {
            arrayTextoInputCriptografado.push('imes');            
        }
        else if (letra == 'o') {
            arrayTextoInputCriptografado.push('ober');
        }
        else if (letra == 'u') {
            arrayTextoInputCriptografado.push('ufat');
        }
        else {
            arrayTextoInputCriptografado.push(letra);
        }
   
    }); 
    
    let textoOutputCriptografado = arrayTextoInputCriptografado.join('');
    textoOutput.innerHTML = textoOutputCriptografado;
    imagemResultado.style.display = 'none';
    paragrafoResultado.style.display = 'none';
    butaoCopiar.style.display = 'block';

    butaoCopiar.addEventListener('click', event => {
        event.preventDefault();
        navigator.clipboard.writeText(textoOutputCriptografado);
        
    })


});

butaoDescriptografar.addEventListener('click', event => {
    event.preventDefault();
    textoOutput.innerHTML = textoInput.value;
    butaoCopiar.style.display = 'none';
    
})














function autoResize()
    {
        objTextArea = document.querySelector('.conteudo-principal_entrada_texto_txtarea');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }