import Band from './band.js'
import User from './user.js'

//Arrays de bandas


export let bands = []
if (localStorage.getItem("bands")) {
bands = JSON.parse(localStorage.getItem("bands"))
} else {
    const band1 = new Band("Muse", "Pop-Rock", "http://www.eurochannel.com/images/stories/Muse_2.jpg", "xxx", "yyy")
    const band2 = new Band("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "xxx", "yyy")
    const band3 = new Band("James", "Jazz", "https://upload.wikimedia.org/wikipedia/pt/1/1a/Muse_-_Follow_Me.jpg", "xxx", "yyy")
    const band4 = new Band("Amelie Lens", "Techno", "https://www.residentadvisor.net/images/events/flyer/2018/3/us-0323-1059221-front.jpg", "xxx", "yyy")
    const band5 = new Band("Imagine Dragons", "Pop-Rock", "https://data.whicdn.com/images/53993895/large.jpg", "xxx", "yyy")

    bands.push(band1, band2, band3, band4, band5)
    localStorage.setItem("bands", JSON.stringify(bands))
}

//Array de users
export const users = []

const user1 = new User("ricardo", "12345")
const user2 = new User("Ana", "12346")
const user3 = new User("ricardo", "12347")

users.push(user1, user2, user3)


/* funcao para adicionar novas bandas ao catalogo */
export function addBand(txtName, sltGenre, txtPhoto, txtDescription, txtVideo) {

    let existBand = false
    /* vai ver se o nome que escrevemos ja existe no conjunto das bandas */
    for (const band of bands) {
        if (band.name === txtName) {
            existBand = true
            break
        }
    }
    if (existBand === false) {
        bands.push(new Band(txtName, sltGenre, txtPhoto, txtDescription, txtVideo))
        localStorage.setItem("bands", JSON.stringify(bands))
        alert(`Banda ${txtName} foi adicionada com sucesso!`)
        location.href = "../Html/index.html"
    } else {
        alert(`Banda ${txtName} ja existe`)
    }
}
/* nao sei se ta certo */
export function sortBands(){
    bands.sort(Band.compare)
    localStorage.setItem("bands", JSO.stringify(bands))
}

export function removeBand(txtName){
    let removeBand = confirm(`deseja mesmo removar a banda ${txtName}?`)
    if(removeBand){
        
    }
}