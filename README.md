 # localStorage

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
}