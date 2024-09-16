//console.log(dados[0].titulo);
// console.log(dados);

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    // console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // console.log(campoPesquisa)

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    //para cada dado dentro da lista de dados
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

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
        //     // então, faça...
        // // section.innerHTML += `
        // resultados += `
        // <div class="item-resultado">
        //     <h2>
        //         <a href="#" target="_blank">${dado.titulo}</a>
        //     </h2>
        //     <p class="descricao-meta">${dado.descricao}</p>
        //     <a href=${dado.link} target="_blank">Mais Informações</a>
        // </div>`
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>"
    }

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