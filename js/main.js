const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista') // Selecionando a tag ul com o elemento lista
const itens = []


form.addEventListener('submit', (event) => {
    // preventDefault() preveni de, ou não deixa acontecer o comportamento padrão daquele evento
    // Neste caso, o submite envia o formulario e recarrega página, agora ele não vai mais recarregar
    event.preventDefault() 

    // podemos capturar o input do evento do submite através do target.elements['nome do elemento']
    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']

    //chamando a função para criar o elemento
    criaElemento(nome.value, quantidade.value) 

    // Deixando a caixa de texto vazia após o clique no submit
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li') // Criando uma nova tag HTML
    novoItem.classList.add('item') // a tag li, recebe a classe  item

    const numeroItem = document.createElement('strong') // Criando um elemento Strong
    numeroItem.innerHTML = quantidade // Adicionando o "número"/"quantidade" a esta tag strong
    // innerHTML retorna o texto com formatações e com elementos html 

    novoItem.appendChild(numeroItem) // appendChild adiciona um elemento ao outro, adiciona um elemento dentro do elemento "pai"
    novoItem.innerHTML += nome

    lista.appendChild(novoItem) // adicionando o elemento LI ao seu pai UL, sendo assim, criando um novo objeto na tela

    const itemAtual = { // Criando um dicionario para armazenar os dados do input
        "nome": nome,
        "quantidade":quantidade
    }
    
    itens.push(itemAtual) // Adicionando o dicionário/objeto ao array

    localStorage.setItem('item',JSON.stringify(itens)) //transformando o objeto/dicionário em strings com o JSON.stringify(itens)
}