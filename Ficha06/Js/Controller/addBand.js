import {
    addBand
} from "../Models/main.js"

const form = document.querySelector("#frmAddBand")

form.addEventListener("submit", function () {
    //event.preventDefault()
    const txtName = document.querySelector("#txtName").value
    const sltGenre = document.querySelector("#sltGenre").value
    const txtPhoto = document.querySelector("#txtPhoto").value
    const txtDescription = document.querySelector("#txtDescription").value
    const txtVideo = document.querySelector("#txtVideo").value


    addBand(txtName, sltGenre, txtPhoto, txtDescription, txtVideo)

    event.preventDefault()

})