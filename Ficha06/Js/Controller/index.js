import {
    bands
} from "../Models/main.js"

const myCatalog = document.querySelector("#myCatalog")
const btnFilter = document.querySelector("#btnFilter")

btnFilter.addEventListener("click", function () {
    const txtName = document.querySelector("#txtName").value
    const sltGenre = document.querySelector("#sltGenre").value
    renderCatalog(txtName, sltGenre)
})

renderCatalog()
/**
 * 
 * @param {string} txtName nome da banda
 * @param {string} sltGenre genero de musica
 */
function renderCatalog(txtName = "", sltGenre = "") {
    let result = ""
    let i = 0
    for (const band of bands) {
        if (
            (sltGenre !== "" && band.genre !==sltGenre)
            ||
            (txtName !=="" && !band.name.startsWith(txtName))  //se o nome da banda nao iniciar com o txtName

        ) {
            continue
        }

        /* de 3 em 3 cartas(colunas) criar uma linha */
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        result +=
            `
    <div class="col-sm-4">
    <div class="card" >
        <img class="card-img-top" src="${band.photo}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${band.name}</h5>
          <p class="card-text">${band.genre}</p>
          <a href="${band.name}" class="btn btn-outline-success view">Ver mais</a>
          <a id="${band.name}" href="#" class="btn btn-outline-danger remove">Remover</a>
        </div>
      </div>
      </div>      
    `
        i++
        if (i % 3 === 0) {
            result += `</div>`
        }
       
    } myCatalog.innerHTML = result
}

const btnsRemove = document.getElementsByClassName("remove")
