import {
    bands
} from "../Models/main.js"

const myCatalog = document.querySelector("#myCatalog")

let result = ""
let i = 0
for (const band of bands) {
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
          <a href="#" class="btn btn-outline-success">Ver mais</a>
          <a href="#" class="btn btn-outline-danger">Remover</a>
        </div>
      </div>
      </div>      
    `
    i++
    if (i % 3 === 0) {
        result += `</div>`
    }

}
myCatalog.innerHTML = result