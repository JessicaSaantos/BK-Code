const btnRetirar = document.querySelector('.escolhaRetirada')
const btnLevar = document.querySelector('.escolhaLevar')

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

let nomeUsuario = (window.prompt ('Queremos te oferecer o melhor, bora iniciar seu pedido?' , 'Diga seu nome'))
const nome = document.querySelector('#nome')

if (nomeUsuario === null || nomeUsuario.length == 0 ) {
    nome.innerHTML = `Bem vindxs!`
}
else if (nomeUsuario.length > 0  ) {
    nome.innerHTML = `Bem vindxs ${nomeUsuario}!!`
}


