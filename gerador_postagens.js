function gerarPostagem() {
    var form = document.getElementById('postForm');
    var titulo = form.titulo.value;
    var imagem = form.imagem.value;
    var descricao = form.descricao.value;
    var link = form.link.value;

    var postagemHTML = `
        <div class="topico">
            <h2>${titulo}</h2>
            <img src="${imagem}" alt="${titulo}">
            <p class="descricao">${descricao}</p>
            <a href="${link}" class="lermais">Ler mais...</a>
        </div>
    `;

    var postagensDiv = document.getElementById('postagens');
    postagensDiv.innerHTML += postagemHTML;

    form.reset();
}
