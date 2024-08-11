        //passo 1 - dar um jeito de pegar o elemento HTML dos botões//
        const botoesCarrossel = document.querySelectorAll(".botao"); //o log é um metodo do nosso console/metodo:query selector all=buscar todos os seletores//
        const imagens = document.querySelectorAll(".imagem");
        const informacoes = document.querySelectorAll(".informacoes");
        /*const quer dizer que a variavel const vai ser constante
        o sinal de = quer dizer que tudo que que está para a esquerda (que é atribuição) a gente vai atribuir para a variavel const*/

        //passo 2 - dar um jeito de identificar o clique do usuário no botão//
        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
        //passo 3 - desmarcar o botão selecionado anterior/a linha abaixo mostra que eu quero desmarcar o botao selecionado//
        desativarBotaoSelecionado();
        //passo 4 - marcar o botão clicado como se estivesse selecionado//
        marcarBotaoSelecionado(botao);
        //passo 5 - esconder a imagem anteriormente selecionada//
        esconderImagemAtiva();
        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado//
        //indice informa qual a posição de um elemento dentro de uma array, dentro de uma lista//
        mostrarImagemDeFundo(indice);
        //passo 7 - esconder a informação do dragão anteriormente selecionado//
        esconderInformacoesAtiva();
        //passo 8 - mostrar a informação do dragão referente ao botão clicado *//
        mostrarInformacoes(indice);
    });
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove('selecionado');
}
//arrow function=funcao é uma acao que a gente quer disparar, dentro do chaves colocamos o que qer que aconteça//