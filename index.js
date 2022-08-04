const btnAvancar = document.querySelector(".btn-avancar");
const btnVoltar = document.querySelector(".btn-voltar");
let cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

const esconderCartaoSelecionado = function () {
    let cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado");
}

const mostrarCartaoSelecionado = function (indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === 2) return;
    if (cartaoAtual < 3) {
        esconderCartaoSelecionado();
        cartaoAtual++;
        mostrarCartaoSelecionado(cartaoAtual);
        cartoes[cartaoAtual - 1].classList.remove("selecionado");
    } else {

    }
})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    if (cartaoAtual < 3) {
        esconderCartaoSelecionado();
        cartaoAtual--;
        mostrarCartaoSelecionado(cartaoAtual);
        cartoes[cartaoAtual + 1].classList.remove("selecionado");
    } else {

    }
})
