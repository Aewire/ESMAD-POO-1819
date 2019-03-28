const movies = []

//definir um listener para o butao de submissao do formulario

const myForm = document.querySelector("form")

myForm.addEventListener("submit", function (event) {
    //obter os valores de todos os elementos do formulario
    const txtTitle = document.querySelector("#txtTitle").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtYear = document.querySelector("#txtYear").value
    const txtCover = document.querySelector("#txtCover").value
    const txtTrailer = document.querySelector("#txtTrailer").value


    //2.Verificar se o filme ja existe no array
    const result = isMovie(txtTitle)

    if (result === true) {
        alert("Filme ja existe")
    } else {
        //3.criar um objecto
        const newMovie = {
            title: txtTitle,
            genre: sltGenre,
            year: txtYear,
            cover: txtCover,
            trailer: txtTrailer

        }
        movies.push(newMovie) //4.tou a meter o objecto newMovie no array Movies

    }    
    renderTable()
    
    

   
    

    //5.Exibir os filmes na tabela

    //const myTable = document.querySelector("table")

    event.preventDefault()
})

const btnCloseCoverDialog = document.querySelector("#btnCloseCoverDialog")
btnCloseCoverDialog.addEventListener("click", function () {
    document.querySelector("#dialogCover").close()
})
//############################### funçoes
//Funçao que vai verificar se o um titulo do filme ja existe

function isMovie(txtTitle) {         //iterar sobre o array
    for (const movie of movies) {   //para cada filme dentro de filmes vou ver se a propriedade title é igual ao titulo escrito no form
        if (movie.title === txtTitle) {
            return true
        } else {
        }

    }
    return false
}

//funçao responsavel por exibir todos os filmes do array na tabela html

function renderTable() {
    //obter a referencia ã tabela
    const myTable = document.querySelector("table")

    //injectar o cabeçalho na tabela

    myTable.innerHTML = `<tr>
    <th>Titulo</th>
    <th>Genero</th>
    <th>Opções</th>
</tr>
    `

    //exibir todos os filmes em linhas independentes

    for (const movie of movies) {//tou a ir buscar a propriedade title ao objecto ao qual podemos chamar movie, por exemplo...
        myTable.innerHTML = `<tr>
    <td>${movie.title}</td>  
    <td>${movie.genre}</td>
    <td>
    <button onclick="showCover('${movie.cover}')">Ver Capa</button>
    <button onclick="showTrailer('${movie.trailer}')">Ver Trailer</button>
    <button onclick="removeMovie('${movie.title}')">Remover</button>
    </td>
</tr>
    `
    }
}
//funcao para exibir uma janela modal com a imagem da capa do filme
function showCover(cover) {
    //injetar o link da capa na imagem
    const imgCover = document.querySelector("#imgCover")
    imgCover.src = cover
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.showModal
}

function removeMovie(title){

    for (let i = 0; i<movies.length; i++) {
        if(movies[i].title === title){
            //remover o filme
            movies.splice(i, 1) //
        }
    }
    renderTable()
}

//exibir a janela

