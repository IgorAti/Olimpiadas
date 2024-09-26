# Projeto Web: Olimpíadas

## Características do projeto:
Este site foi projetado para pesquisar informações sobre atletas brasileiros. O código combina HTML para estrutura, CSS para estilos e JavaScript para funcionalidade. O usuário pode pesquisar um atleta ou esporte, e os resultados relevantes são exibidos dinamicamente.

**O site é composto por quatro arquivos:**

* **index.html:** Arquivo principal que contém a estrutura do site.
* **dados.js:** Arquivo contendo a base de dados do site.
* **app.js:** Arquivo que contém o código JavaScript para a funcionalidade de pesquisa do site.
* **style.css:** Arquivo que define o estilo visual do site.


## Documetação técnica do projeto:
### Análise do Código HTML, CSS, e JavaScript

Vamos analisar cada parte do código HTML, CSS, e JavaScript para entender como este site foi criado e como ele funciona.

#### Estrutura do Código HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo</title>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Olá, Mundo!</h1>
        <button id="botao">Clique em mim!</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```


##### Análise do Código index.html
1. **`<!DOCTYPE html>`**  
   Define o tipo de documento como HTML5.  
   Essa é a primeira linha em qualquer documento HTML e instrui o navegador a interpretar a página como um documento HTML5.

2. **`<html lang="en">`**  
   Abre a tag HTML, que contém todo o conteúdo da página.  
   O atributo `lang="en"` indica que o idioma principal da página é inglês, útil para navegadores e ferramentas de acessibilidade.

3. **`<head>`**  
   O elemento `<head>` contém metadados sobre o documento, como codificação de caracteres, título da página e links para recursos externos.

4. **`<meta charset="UTF-8">`**  
   Define a codificação de caracteres para UTF-8, garantindo que caracteres especiais (acentos, símbolos) sejam exibidos corretamente.

5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**  
   Faz com que a página seja exibida corretamente em dispositivos móveis, ajustando a largura da página para a largura da tela do dispositivo.

6. **`<title>Exemplo</title>`**  
   Define o título da página, que aparece na aba do navegador.

7. **`<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;700&display=swap" rel="stylesheet">`**  
   Importa uma fonte externa, neste caso, a fonte "Chakra Petch" do Google Fonts.

8. **`<link rel="stylesheet" href="style.css">`**  
   Inclui um arquivo CSS externo, chamado `style.css`, que será responsável pelo estilo da página.

9. **`<body>`**  
   O corpo da página, onde o conteúdo visível será inserido.  
   Dentro do `body`, há uma `div` com a classe `container` que contém o título "Olá, Mundo!" e um botão.

10. **`<script src="script.js"></script>`**  
    Importa um arquivo JavaScript externo chamado `script.js`, que adicionará interatividade à página.

#### Base de dados em JavaScrip (JS)
O arquivo dados.js contém a base de dados a ser utilizada:

```
let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira...",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira...",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira...",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginastica ouro"
    }
];

```

##### Análise do código dados.js:

O código que você forneceu define um array chamado `dados` em JavaScript, que contém informações sobre atletas brasileiros. Vamos analisar cada parte:

**1. `let dados = [ ... ]`:**

* **`let`:**  Declara uma variável chamada `dados` usando a palavra-chave `let`. A palavra-chave `let` indica que o valor da variável pode ser alterado durante a execução do programa.
* **`[ ... ]`:** Define um array. Um array é uma estrutura de dados que permite armazenar uma coleção de elementos, nesse caso, informações sobre os atletas.

**2. `{ ... }` dentro do array:**

* Cada conjunto de chaves `{}` representa um objeto. Um objeto é uma estrutura de dados que permite armazenar pares chave-valor, onde a chave é uma string e o valor pode ser de qualquer tipo de dados. 

**3. Propriedades dos objetos:**

* **`titulo: "Rayssa Leal"`:** A chave `titulo` é uma string que representa o nome do atleta. O valor associado à chave `titulo` é a string "Rayssa Leal".
* **`descricao: "...`:** A chave `descricao` contém uma string com a descrição do atleta.
* **`link: "https://pt.wikipedia.org/wiki/Rayssa_Leal"`:** A chave `link` armazena o link para a página do atleta (no caso, a página da Wikipedia).
* **`tags: "skate fada sk8"`:** A chave `tags` contém uma string com palavras-chave que descrevem o atleta e seu esporte. 

**Em resumo:**

O código define um array chamado `dados` que armazena informações sobre três atletas: Rayssa Leal, Beatriz Souza e Rebeca Andrade. Cada objeto dentro do array contém informações específicas sobre um atleta, como nome, descrição, link para sua página e tags.

**Usando o código:**

Este array `dados` é usado no código `app.js` para a funcionalidade de pesquisa. Quando o usuário digita um termo no campo de pesquisa, o código percorre o array `dados`, comparando o termo de pesquisa com o título, descrição e tags de cada atleta. Se houver correspondência, o código exibe informações sobre o atleta na seção de resultados da pesquisa.

**Exemplo:**

Se o usuário digitar "skate" no campo de pesquisa, o código encontrará Rayssa Leal no array `dados` porque a string "skate" está presente na propriedade `tags` do objeto Rayssa Leal. 

Espero que essa explicação detalhada tenha sido útil! 


#### Código JavaScript para a funcionalidade de pesquisa do site (app.js)

```javascript
//console.log(dados[0].titulo);
// console.log(dados);

//  1. Função pesquisar
function pesquisar(){
    // 2. Seleciona a seção dos resultados
    let section = document.getElementById("resultados-pesquisa")
    // console.log(section);
    
    // 3. Obtem o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // console.log(campoPesquisa)

    // 4. Verifica se o campo está vazio
    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    // 5. Converte a pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // 6. Inicializa as variáveis de resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // 7. Loop para percorrer os dados
    //para cada dado dentro da lista de dados
    for (let dado of dados){
        // 8. Converte dados para minúsculas
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // 9. Verifica se a pesquisa é encontrada
        // se "titulo" includes campoPesquisa, 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){   
                // então, faça... cria um novo elemento
            // section.innerHTML += `
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>`            
        }
    }

    // 10. Verifica se resultados estão vazios
    if (!resultados){
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>"
    }

    // 11. Atualiza o HTML com os resultados
    // estou atribuindo à sessão html o resultado da variável "resultados" criada a partir do "for" acima
    section.innerHTML = resultados


}

// let section = document.getElementById("resultados-pesquisa")
// console.log(section);

// let resultados = ""

// //para cada dado dentro da lista de dados
// for (let dado of dados){
//     // section.innerHTML += `
//     resultados += `
//     <div class="item-resultado">
//         <h2>
//             <a href="#" target="_blank">${dado.titulo}</a>
//         </h2>
//         <p class="descricao-meta">${dado.descricao}</p>
//         <a href=${dado.link} target="_blank">Mais Informações</a>
//     </div>`
// }

// // estou atribuindo à sessão html o resultado da variável "resultados" criada a partir do "for" acima
// section.innerHTML = resultados
```

##### Análise do código app.js

**Explicação detalhada:**

1. **Função `pesquisar()`:**
   - Esta função é chamada quando o usuário clica no botão "Pesquisar". Ela realiza a lógica da pesquisa no site.

2. **Selecionando a seção de resultados:**
   - `let section = document.getElementById("resultados-pesquisa")`: Seleciona o elemento HTML com o id `resultados-pesquisa` (que é a seção onde os resultados serão exibidos) usando `document.getElementById()`.

3. **Obtendo o valor do campo de pesquisa:**
   - `let campoPesquisa = document.getElementById("campo-pesquisa").value`: Obtém o valor do campo de texto com o id `campo-pesquisa` (o campo onde o usuário digita sua pesquisa) usando `document.getElementById()`.

4. **Verificando se o campo está vazio:**
   - `if (campoPesquisa == "")`: Verifica se o valor do campo de pesquisa é uma string vazia (ou seja, se o usuário não digitou nada). Se for, exibe uma mensagem "Nada foi encontrado" na seção de resultados e retorna da função (usando `return`), não realizando mais a pesquisa.

5. **Convertendo a pesquisa para minúsculas:**
   - `campoPesquisa = campoPesquisa.toLowerCase()`: Converte o valor do campo de pesquisa para minúsculas (usando `toLowerCase()`) para que a pesquisa seja case-insensitive (não leve em consideração letras maiúsculas ou minúsculas).

6. **Inicializando as variáveis de resultados:**
   - `let resultados = "";`: Cria uma variável chamada `resultados` que armazenará os resultados da pesquisa (inicialmente uma string vazia).
   - `let titulo = "";`, `let descricao = "";`, `let tags = "";`: Cria variáveis para armazenar temporariamente o título, descrição e tags dos atletas, também inicializadas como strings vazias.

7. **Loop para percorrer os dados:**
   - `for (let dado of dados)`: Este loop `for...of` itera sobre cada elemento do array `dados` (que contém as informações dos atletas), atribuindo cada objeto ao `dado` em cada iteração.

8. **Convertendo dados para minúsculas:**
   - `titulo = dado.titulo.toLowerCase()`, `descricao = dado.descricao.toLowerCase()`, `tags = dado.tags.toLowerCase()`: Converte o título, descrição e tags do atleta atual (o `dado` do loop) para minúsculas para facilitar a comparação com o termo de pesquisa.

9. **Verificando se a pesquisa é encontrada:**
   - `if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))`: Verifica se o termo de pesquisa (em minúsculas) está presente no título, descrição ou tags do atleta atual. Se houver correspondência em pelo menos um desses campos, o código dentro do `if` é executado.

10. **Criando os elementos HTML para os resultados:**
   - O código dentro do `if` cria um novo elemento HTML `div` com a classe `item-resultado` para cada atleta que corresponde à pesquisa. Esse elemento contém o título do atleta (em um elemento `<h2>` com um link `a` para a página do atleta), a descrição do atleta (em um elemento `p` com a classe `descricao-meta`) e um link `a` para "Mais Informações".

11. **Verificando se resultados estão vazios:**
   - `if (!resultados)`: Verifica se a variável `resultados` (que acumula os resultados da pesquisa) está vazia. Se estiver, significa que nenhum atleta foi encontrado.
   - Se não houver resultados, o código atribui a `resultados` uma mensagem de erro indicando que nada foi encontrado.

12. **Atualizando o HTML com os resultados:**
   - `section.innerHTML = resultados`: Atribui o conteúdo da variável `resultados` (que agora contém os elementos HTML dos atletas encontrados ou a mensagem de erro) ao conteúdo da seção de resultados (o elemento `section` que foi selecionado no início da função).

**Em resumo:**

Esta função `pesquisar` realiza o seguinte:

1. Obtém o termo de pesquisa do usuário.
2. Percorre os dados dos atletas, procurando por correspondência com o termo de pesquisa no título, descrição ou tags.
3. Cria elementos HTML para exibir os resultados encontrados, se houver.
4. Atualiza o conteúdo da seção de resultados com os resultados ou com uma mensagem de erro.


#### Código CSS para definição do estilo visual do site (style.css). Base de dados e detalhamento.

O código CSS que você forneceu define o estilo visual do site de atletas brasileiros.

**1. Importando a fonte:**

```css
/* Importa a fonte Chakra Petch do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
```

* `@import url(...)`: Essa diretiva importa um arquivo CSS externo, nesse caso, a fonte "Chakra Petch" do Google Fonts. A URL especifica qual estilo da fonte deve ser carregado (variantes em itálico e peso).

**2. Estilizando o corpo da página (`body`)**

```css
/* Estiliza o corpo da página */
body {
    font-family: "Chakra Petch", sans-serif; /* Define a fonte padrão */
    background-color: #DDDDDD; /* Cor de fundo da página */
    display: flex; /* Usa Flexbox para layout */
    flex-direction: column; /* Alinha os itens na vertical */
    align-items: center; /* Centraliza os itens horizontalmente */
    justify-content: center; /* Centraliza os itens verticalmente */
    height: 100vh; /* Preenche a altura total da viewport */
    margin: 0; /* Remove a margem padrão */
    padding: 0; /* Remove o padding padrão */
}
```

* `font-family: "Chakra Petch", sans-serif;`: Define a fonte padrão para o corpo da página como "Chakra Petch". Se a fonte não estiver disponível, o navegador usará uma fonte sans-serif padrão.
* `background-color: #DDDDDD;`: Define a cor de fundo da página como um cinza claro.
* `display: flex;`: Habilita o modelo Flexbox para o corpo da página, permitindo um layout mais flexível.
* `flex-direction: column;`: Alinha os itens dentro do corpo da página na vertical (um abaixo do outro).
* `align-items: center;`: Centraliza os itens horizontalmente dentro do corpo da página.
* `justify-content: center;`: Centraliza os itens verticalmente dentro do corpo da página.
* `height: 100vh;`: Define a altura do corpo da página como 100% da altura da viewport (a área visível do navegador).
* `margin: 0;` e `padding: 0;`: Remove as margens e espaçamentos padrões do corpo da página.

**3. Estilizando o título principal (`h1`)**

```css
/* Estiliza os títulos h1 */
h1 {
    font-size: 2.5rem; /* Tamanho da fonte */
    color: #222831; /* Cor do texto */
    text-align: center; /* Alinha o texto ao centro */
    letter-spacing: 0.4rem; /* Espaçamento entre letras */
}
```

* `font-size: 2.5rem;`: Define o tamanho da fonte do título principal como 2.5rem (relativo ao tamanho da fonte padrão do navegador).
* `color: #222831;`: Define a cor do texto do título como um cinza escuro.
* `text-align: center;`: Alinha o texto do título ao centro.
* `letter-spacing: 0.4rem;`: Define o espaçamento entre as letras do título como 0.4rem.

**4. Estilizando as seções (`section`)**

```css
/* Estiliza as seções da página */
section {
    display: flex; /* Usa Flexbox para layout */
    flex-direction: column; /* Alinha os itens na vertical */
    align-items: center; /* Centraliza os itens horizontalmente */
    margin-bottom: 3rem; /* Espaçamento abaixo de cada seção */
}
```

* `display: flex;`: Habilita o modelo Flexbox para as seções, permitindo um layout flexível.
* `flex-direction: column;`: Alinha os itens dentro das seções na vertical (um abaixo do outro).
* `align-items: center;`: Centraliza os itens horizontalmente dentro das seções.
* `margin-bottom: 3rem;`: Define uma margem inferior de 3rem para cada seção, criando um espaço entre elas.

**5. Estilizando os campos de texto (`input`)**

```css
/* Estiliza os inputs dentro das seções */
section input {
    width: 30rem; /* Largura dos inputs */
    border: none; /* Remove a borda padrão */
    padding: 1rem; /* Espaçamento interno */
    border-radius: 1.5rem; /* Borda arredondada */
    margin-bottom: 1rem; /* Espaçamento abaixo dos inputs */
    color: #45474B; /* Cor do texto */
    font-size: 1rem; /* Tamanho da fonte */
    box-sizing: border-box; /* Inclui padding e border na largura total */
}
```

* `width: 30rem;`: Define a largura dos campos de texto como 30rem.
* `border: none;`: Remove a borda padrão dos campos de texto.
* `padding: 1rem;`: Define um espaçamento interno de 1rem para o conteúdo dos campos de texto.
* `border-radius: 1.5rem;`: Define uma borda arredondada de 1.5rem para os campos de texto.
* `margin-bottom: 1rem;`: Define uma margem inferior de 1rem para os campos de texto.
* `color: #45474B;`: Define a cor do texto dos campos de texto como um cinza escuro.
* `font-size: 1rem;`: Define o tamanho da fonte dos campos de texto como 1rem.
* `box-sizing: border-box;`: Garante que o padding e a borda sejam incluídos na largura total do campo de texto.

**6. Estilizando os botões (`button`)**

```css
/* Estiliza os botões dentro das seções */
section button {
    padding: 0.8rem 1.2rem; /* Espaçamento interno do botão */
    border: none; /* Remove a borda padrão */
    border-radius: 1.5rem; /* Borda arredondada */
    background-color: #30475E; /* Cor de fundo do botão */
    color: #F5F7F8; /* Cor do texto do botão */
    font-size: 1rem; /* Tamanho da fonte */
    cursor: pointer; /* Muda o cursor para indicar que é clicável */
}
```

* `padding: 0.8rem 1.2rem;`: Define um espaçamento interno para o botão.
* `border: none;`: Remove a borda padrão do botão.
* `border-radius: 1.5rem;`: Define uma borda arredondada para o botão.
* `background-color: #30475E;`: Define a cor de fundo do botão como um azul escuro.
* `color: #F5F7F8;`: Define a cor do texto do botão como um branco claro.
* `font-size: 1rem;`: Define o tamanho da fonte do botão como 1rem.
* `cursor: pointer;`: Muda o cursor do mouse para um ponteiro ao passar sobre o botão, indicando que ele é clicável.

**7. Adicionando efeito hover ao botão (`button:hover`)**

```css
/* Adiciona efeito hover ao botão de pesquisa */
section button:hover {
    background-color: #30475E; /* Muda a cor de fundo ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra mais intensa */
}
```

* `section button:hover`: Seleciona o botão quando o mouse está sobre ele.
* `background-color: #30475E;`: Define a cor de fundo do botão ao passar o mouse sobre ele.
* `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);`: Adiciona uma sombra ao botão ao passar o mouse sobre ele, criando um efeito de profundidade.

**8. Estilizando a caixa de resultados (`resultados-pesquisa`)**

```css
/* Estiliza a caixa de resultados da pesquisa */
.resultados-pesquisa {
    width: 60rem; /* Largura máxima da caixa de resultados */
    height: 46vh; /* Altura máxima da caixa de resultados */
    overflow-y: auto; /* Adiciona rolagem vertical se necessário */
    margin-top: 1rem; /* Espaçamento acima da caixa de resultados */
    padding: 1rem; /* Espaçamento interno */
    border-radius: 0.6rem; /* Borda arredondada */
}
```

* `width: 60rem;`: Define a largura máxima da caixa de resultados como 60rem.
* `height: 46vh;`: Define a altura máxima da caixa de resultados como 46vh (46% da altura da viewport).
* `overflow-y: auto;`: Habilita a rolagem vertical se o conteúdo da caixa de resultados exceder a altura definida.
* `margin-top: 1rem;`: Define uma margem superior de 1rem para a caixa de resultados.
* `padding: 1rem;`: Define um espaçamento interno de 1rem para a caixa de resultados.
* `border-radius: 0.6rem;`: Define uma borda arredondada para a caixa de resultados.

**9. Estilizando os itens de resultado (`item-resultado`)**

```css
/* Estiliza cada item de resultado */
.item-resultado {
    background: #FFFFFF; /* Cor de fundo dos itens */
    border-radius: 0.6rem; /* Borda arredondada */
    padding: 1rem; /* Espaçamento interno */
    margin-bottom: 1rem; /* Espaçamento abaixo dos itens */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra leve */
}
```

* `background: #FFFFFF;`: Define a cor de fundo dos itens de resultado como branco.
* `border-radius: 0.6rem;`: Define uma borda arredondada para os itens de resultado.
* `padding: 1rem;`: Define um espaçamento interno de 1rem para os itens de resultado.
* `margin-bottom: 1rem;`: Define uma margem inferior de 1rem para os itens de resultado, criando um espaço entre eles.
* `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);`: Adiciona uma sombra leve aos itens de resultado, criando um efeito de profundidade.

**10. Estilizando os títulos dentro dos itens de resultado (`item-resultado h2`)**

```css
/* Estiliza os títulos dentro dos itens de resultado */
.item-resultado h2 {
    font-size: 1.5rem; /* Tamanho da fonte */
    color: #222831; /* Cor do texto */
}
```

* `font-size: 1.5rem;`: Define o tamanho da fonte dos títulos como 1.5rem.
* `color: #222831;`: Define a cor do texto dos títulos como um cinza escuro.

**11. Estilizando os links dentro dos itens de resultado (`item-resultado a`)**

```css
/* Estiliza os links dentro dos itens de resultado */
.item-resultado a {
    text-decoration: none; /* Remove o sublinhado padrão dos links */
    color: #30475E; /* Cor do texto dos links */
}
```

* `text-decoration: none;`: Remove o sublinhado padrão dos links.
* `color: #30475E;`: Define a cor do texto dos links como um azul escuro.

**12. Estilizando os links ao passar o mouse (`item-resultado a:hover`)**

```css
/* Estiliza os links quando são passados o mouse sobre */
.item-resultado a:hover {
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
}
```

* `item-resultado a:hover`: Seleciona os links dentro dos itens de resultado quando o mouse está sobre eles.
* `text-decoration: underline;`: Adiciona um sublinhado aos links quando o mouse está sobre eles.

**13. Estilizando a descrição meta (`descricao-meta`)**

```css
/* Estiliza a descrição meta dentro dos itens de resultado */
.descricao-meta {
    color: #45474B; /* Cor do texto */
    margin: 0.5rem 0; /* Margem acima e abaixo */
}
```

* `color: #45474B;`: Define a cor do texto da descrição meta como um cinza escuro.
* `margin: 0.5rem 0;`: Define uma margem de 0.5rem acima e abaixo da descrição meta, criando espaço em torno dela.

**14. Estilizando o rodapé (`footer`)**

```css
/* Estiliza o rodapé da página */
footer {
    background-color: #F5F7F8; /* Cor de fundo do rodapé */
    color: #45474B; /* Cor do texto */
    text-align: center; /* Alinha o texto ao centro */
    padding: 0; /* Espaçamento interno */
    width: 100%; /* Largura total da página */
    position: absolute; /* Posiciona o rodapé */
    bottom: 0; /* Alinha ao fundo da página */
    font-size: 1rem; /* Tamanho da fonte */
}
```

* `background-color: #F5F7F8;`: Define a cor de fundo do rodapé como um cinza claro.
* `color: #45474B;`: Define a cor do texto do rodapé como um cinza escuro.
* `text-align: center;`: Alinha o texto do rodapé ao centro.
* `padding: 0;`: Remove o espaçamento interno padrão do rodapé.
* `width: 100%;`: Define a largura do rodapé como 100% da largura da página.
* `position: absolute;`: Posiciona o rodapé absolutamente, permitindo controlá-lo de forma mais precisa.
* `bottom: 0;`: Alinha o rodapé ao fundo da página.
* `font-size: 1rem;`: Define o tamanho da fonte do rodapé como 1rem.

**15. Estilos Responsivos (`@media`)**

* `@media (max-width: 768px) { ... }`: Define estilos específicos para telas com largura máxima de 768 pixels (tablets).
* `@media (max-width: 480px) { ... }`: Define estilos específicos para telas com largura máxima de 480 pixels (celulares).

Os estilos dentro de cada bloco `@media` ajustam o tamanho das fontes, larguras de elementos, alturas, espaçamentos e outros elementos para garantir que o site seja visualmente agradável e fácil de usar em diferentes tamanhos de tela.

**Em resumo:**

O código CSS define o estilo visual do site, incluindo a fonte, cores, layout, espaçamento e responsividade para diferentes tamanhos de tela. Ele utiliza as propriedades CSS para criar uma aparência visual consistente e agradável para o site. 

Espero que essa explicação detalhada tenha sido útil para você entender o código CSS! 😊


