import {
    removeBand
} from "../Models/main.js"

const remove = document.querySelector("#cardRemove")


remove.addEventListener("submit", function(){

    removeBand(txtName, sltGenre, txtPhoto, txtDescription, txtVideo)
})