const btnRetirar = document.querySelector('.escolhaRetirada')
const btnLevar = document.querySelector('.escolhaLevar')

let nomeUsuario = (window.prompt ('Diga um apelido antes de iniciarmos'))
const nome = document.querySelector('#nome')

if (nomeUsuario === null || nomeUsuario.length <= 0 ) {
    nome.innerHTML = `Bem vindxs!`
}
else if (nomeUsuario.length > 0  ) {
    nome.innerHTML = `Bem vindxs ${nomeUsuario}!!`
}

btnRetirar.addEventListener('click' , iniciarPedido)
btnLevar.addEventListener('click' , iniciarPedido)

function iniciarPedido(){
    const menu = document.querySelector('main')
    const rodape = document.querySelector('footer')
    const secao = document.querySelector('.secao')

    menu.classList.add('mostrar')
    rodape.classList.add('mostrar')
    secao.classList.remove('mostrar')

}
