const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista') // Selecionando a tag ul com o elemento lista



form.addEventListener('submit', (event) => {
    event.preventDefault() 
    // preventDefault() prevenide, ou não deixa acontecer o comportamento padrão daquele evento
    // Neste caso, o submite envia o formulario e recarrega página, agora ele não vai mais recarregar

    const nome = event.target.elements['nome'].value
    const quantidade = event.target.elements['quantidade'].value
    // podemos capturar o input do evento do submite através do target.elements['nome do elemento']

    criaElemento(nome, quantidade) 
    //chamando a função para criar o elemento
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


}