 # localStorage

 Estrutura básica de storage é composta por:

    {
    chave: 'valor';
    }

**Armazenando dados no navegador com localStorage**

* localStorage.setItem() para criar um novo par de chave: valor;

* localStorage.getItem() para recuperar o valor do par chave: valor;

* localStorage.removeItem() para remover um par específico;

* localStorage.clear() apaga TODOS os pares gravados pro aquele domínio;


**Armazenando múltiplos dados no navegador com localStorage**

Para salvar um dicionário no localStorage, devemos criar um objeto para armazená-lo. Porém, o localStorage só ler elementos json (só ler elementos no formato de string),
precisamos transformar o elemento que estamos selecionando em uma string.

Preciamos transformar nosso objeto em string utilizando o JSON.stringify(objeto). ex:

    const itemAtual = {
        "nome": nome,
        "quantidade":quantidade
    }
    
    localStorage.setItem("item",JSON.stringify(itemAtual))

Agora que já conseguimos transformar um elemento em uma string, precisamos criar um ARRAY para armazenar essa sequência de strings. Como?

    const itemAtual = {
        "nome": nome,
        "quantidade":quantidade
    }
    
    itens.push(itemAtual)       <- push adiciona um item ao array (itens é uma constante declarada como array)

    localStorage.setItem("item",JSON.stringify(itens))

**Consultando múltiplos dados no navegador com localStorage**

Para consultar os itens salvos no array, antes devemos utilizar o método JSON.parse(). Com ele, da mesma forma que devemos transformar um objeto em uma string para enviar ao localStorage, para consultá-la também, devemos transformar em uma string para lermos do localStorage.

Fazemos isso através do JSON.parse(localStorage.getItem("itens"))

Para pegarmos os dados do localStorage ao recarregarmos a página, podemos fazer um forEach para iterar o array armazenado no navegador e buscarmos todos os elementos. Ex:

    itens.forEach((elemento) => {
        console.log(elemento.nome,elemento.quantidade)
    })

Agora, quando recarregamos o site, precisamos fazer que o javascript crie um elemento de acordo com cada item do array armazenado no localStorage.