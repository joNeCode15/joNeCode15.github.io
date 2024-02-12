function calcularProgressoLeitura() {
    const alturaTotal = document.getElementById('conteudo').clientHeight;
    const posicaoAtual = window.scrollY;
    const progresso = (posicaoAtual / alturaTotal) * 100;
    document.getElementById('barraProgresso').style.width = progresso + '%';
    console.log('Função calcularProgressoLeitura chamada');
}
window.addEventListener('scroll', calcularProgressoLeitura);
