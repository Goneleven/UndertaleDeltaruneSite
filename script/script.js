// js para mudar o modo do site
document.querySelector('.botao-modo').addEventListener('click', (e) => {
    e.target.classList.toggle('selecao-fundo-imagem');
    document.body.classList.toggle('light');

});