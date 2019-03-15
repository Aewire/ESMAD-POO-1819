const frmGame = document.querySelector("#frmGame") //ou ("form")

frmGame.addEventListener("submit", function(event){
    const txtGameYear = document.querySelector("#txtGameYear").value
    const currentYear = new Date().getFullYear()
    if(txtGameYear > 1950 && txtGameYear < currentYear )
    {
        alert("Validaçao OK")
        addGameTable()
    } else {
        alert("erro")
    }
    event.preventDefault() //colocar um parametro na function em cima para poder fazer isto
})

function addGameTable(){
    const table = document.querySelector("table")
    const gameName = document.querySelector("#txtGameName")
    const gameYear = document.querySelector("#txtGameYear")
    const gameGenre = document.querySelector("#txtGameGenre")
    const gameCover = document.querySelector("#txtGameCover")

    table.innerHTML += `
    <tr>
        <td>${gameName}</td>
        <td>${gameYear}</td>
        <td>${gameGenre}</td>
        <td><img src="${gameCover}/></td>
        <td></td>`
}