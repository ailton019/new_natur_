const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
       //passo 3 - desmarcar o botão selecionado anterior
    botao.addEventListener("click",  () => {
    const botaoSelecionado = document.querySelector(".selecionado")
    botaoSelecionado.classList.remove("selecionado")

    //passo 4 - marcar o botão clicado como se estivesse selecionado
    botao.classList.add("selecionado")

    //passo 5 - esconder a imagem anteriormente selecionada
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
    //passo 6 - fazer aparecer a imagem correspondente ao botão clicado 
    imagens[indice].classList.add("ativa");

    //passo 7 - esconder a informação do dragão anteriormente selecionado
    const informacoesAtiva = document.querySelector (".informacoes.ativa");
    informacoesAtiva.classList.remove('ativa');
    
    //passo 8 - mostrar a informação do dragão referente ao botão clicado

    informacoes[indice].classList.add("ativa");
    })
})


