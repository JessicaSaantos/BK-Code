/* ===================== Iniciando a seção de pedido depois da seção de seleção ==============*/
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

/* =================== Capturando o nome e imprimindo na tela ======================*/

let nomeUsuario = (window.prompt ('Queremos te oferecer o melhor, bora iniciar seu pedido?' , 'Diga seu nome'))
const nome = document.querySelector('#nome')
const sacolaNome = document.querySelector('#sacolaNome')

if (nomeUsuario === null || nomeUsuario.length == 0 || nomeUsuario == 'Diga seu nome') {
    nome.innerHTML = `Bem vindxs!`
    sacolaNome.innerHTML = `Olá Cliente | Minha sacola`
}
else {
    nome.innerHTML = `Bem vindxs ${nomeUsuario}!!`
    sacolaNome.innerHTML = `Olá  ${nomeUsuario} | Minha sacola`
}

/*================================== Criando template do card produto======================*/

const cardsVitrine = document.querySelector('.cardsPedidos')

function criarCard (produto) {
    
    let li = document.createElement('li')


    li.innerHTML = `
        <img src="${produto.image}" alt="${produto.nome}">
                
        <p>${produto.nome}</p>
        <p>${produto.preco.toFixed(2)}</p>

        <button type="button" id="${produto.id}">
            Adicionar
        </button>
        `

    cardsVitrine.appendChild(li)
}

/* Listando os cards de produtos*/
function listarProdutos (listaProdutos){
    
    for (let i = 0 ; i < listaProdutos.length ; i ++) {
    const produto = listaProdutos[i]
    criarCard(produto)
}
}

listarProdutos(produtos)

/*=================== Adicionando produtos no carrinho de compras====================*/

let carrinho = []

cardsVitrine.addEventListener('click' , addNoCarrinho)

function addNoCarrinho (event) {
    //identificando elemento clicado
   const btn = event.target
   

   if (btn.tagName == "BUTTON") {
      const idProduto = btn.id

      //Pesquisando se o produto é existente
      const produtoFiltrado = produtos.find(
     (produto) => produto.id == idProduto
    )

    //Adicionando no array carrinho
    carrinho.push(produtoFiltrado)

        listarPedidos()
        atualizarTotal()
}
}

const listaPedidos = document.querySelector('.listaProdutos')


function montarTemplateCarrinho (pedido) {

    const itemLista = document.createElement('li')

    itemLista.innerHTML = `
        <div class="infoLadoEsquerdo">
            <img src="${pedido.image}" alt="${pedido.nome}">
            <p>${pedido.nome}</p>
        </div>
        <div class="infoLadoDireito">
            <span>R$${pedido.preco.toFixed(2)}</span>
            <button>
            <img src="./assets/img/lixo.png" alt="icon lixo">
            </button>
        </div>
    `

    listaPedidos.appendChild(itemLista)
}

function listarPedidos (){
    
    listaPedidos.innerHTML = ''
    for (let i = 0 ; i < carrinho.length ; i ++) {
    const pedido = carrinho[i]
    montarTemplateCarrinho(pedido) 
}
}

/*=================== Atualizando Total do pedido ====================*/


listaPedidos.addEventListener('click' , removeItem)


function atualizarTotal() {
    const infoPreco = document.querySelector('.infoPreco')
     let total = 0
     
    for(let i = 0 ; i < carrinho.length ; i ++) {
        const produto = carrinho[i]

        total += produto.preco
        
    }
    infoPreco.innerText = `Total: R$ ${total.toFixed(2)}`
}    

/*=================== Removendo item da lista VISUALMENTE ====================*/

function removeItem (event) {
    const botao = event.target


    if (botao.tagName == "BUTTON") { 
     
     const item = botao.closest("li") // retorna o ancestral + próximo, em relação ao atual
     item.remove()
      
      removeItemCarrinho(item)
    }
  
}

/*=================== Removendo item da lista no ARRAY ====================*/

function removeItemCarrinho (itemRemovido) {
    const item = itemRemovido.querySelector("p").innerText

      //Pesquisando se o produto é existente
      const produtoFiltrado = produtos.find(
        (produto) => produto.nome == item
       )

        const posItem = (carrinho.indexOf(produtoFiltrado))
        
        carrinho.splice(posItem , 1)     //permite inserir novos elementos e excluir elementos existentes em um array

        atualizarTotal()
}
 
