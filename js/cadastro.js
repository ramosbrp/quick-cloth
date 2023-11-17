
const viaCepAPI = 'https://viacep.com.br/ws';




const init = () => {
    var inputCep = document.getElementById("cep");
    inputCep.addEventListener("onBlur", console.log(inputCep.val));
}





// const cep = document.addEventListener('onBlur')

const buscaCep = () => {
    // fetch(`${viaCepAPI}`)
    console.log(inputCep.value)
}