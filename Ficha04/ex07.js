/*7. Objetos (ficheiro ex7.html)
Faça uma página Web que permita gerir os seus filmes preferidos. A página deve ser composta por
um formulário no topo com os seguintes campos:
● Titulo do filme (obrigatório)
● Género (aventura, ação, comédia, terror, romance, thriller, Outro)
● Ano (entre 1900 e o ano atual / obrigatório)
● Capa (link / obrigatório)
● Trailer (link)
● Botões:
○ Submissão (submit)
○ Reposição (reset)
Ao adicionar um filme válido (atenção: não pode adicionar dois filmes com o mesmo título) deve ser
alimentada uma tabela com as seguintes colunas:
● o título
● o género
● opções (conjunto de botões)
○ VER CAPA (abre modal com a capa do filme)
○ VER TRAILER (abre modal com a reprodução automática do trailer)
○ REMOVER (remove o filme do array de objetos)*/

const frmMovie = document.querySelector("#frmMovie") //ou ("form")

frmMovie.addEventListener("submit", function(event){
    const txtMovieYear = document.querySelector("#txtMovieYear").value
    const currentYear = new Date().getFullYear()
    if(txtMovieYear > 1900 && txtMovieYear < currentYear )
    {
        alert("Validaçao OK")
        addMovieTable()
    } else {
        alert("erro")
    }
    event.preventDefault() //colocar um parametro na function em cima para poder fazer isto
})

function addMovieTable(){
    const table = document.querySelector("table");
    const MovieName = document.querySelector("#txtMovieName");
    const MovieYear = document.querySelector("#txtMovieYear");
    const MovieGenre = document.querySelector("#txtMovieGenre");
    const MovieCover = document.querySelector("#txtMovieCover");
    const MovieTrailer = document.querySelector("#txtMovieTrailer");
    //const Opçoes = document.querySelector("#txtMovieOptions").value
    
    table.innerHTML += `
    <tr>
        <td>${MovieName.value}</td>
        <td>${MovieYear.value}</td>
        <td>${MovieGenre.value}</td>
       
        <td>
        <input type="button" onclick= "location.href='${MovieCover.value}'" value="Ver Capa" />
        <input type="button" onclick= "${document.querySelector("table").deleteRow(0)}" value="Remover" />
        <input type="button" onclick= "location.href='${MovieTrailer.value}'" value="Ver Trailer" />
        
    </td>
        <td></td>
        
        </tr>
        `       
}
