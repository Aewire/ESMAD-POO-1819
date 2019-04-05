/**
 * Classe que vai modelar uma banda de musica
 */
class Band{
    constructor(name, genre, creationDate, origin, nMembers, photo, info){
        
        this.name = name
        this.genre = genre
        this.creationDate = creationDate
        this.origin = origin
        this.nMembers = nMembers
        this.photo = photo
        this.info = info
    }
}
const myBand = new Band("Imagine Dragons", "Pop/Rock", 2008, 4, UK,
 "https://yt3.ggpht.com/a-/AAuE7mAcE1g-2OoMYI0_u_dm9XBnK-cmoEQKCqzilQ=s900-mo-c-c0xffffffff-rj-k-no", "https://pt.wikipedia.org/wiki/Imagine_Dragons")
const myBand2 = new Band("Metallica", "Metal", 1983, 4, UK,
  "https://yt3.ggpht.com/a-/AAuE7mAcE1g-2OoMYI0_u_dm9XBnK-cmoEQKCqzilQ=s900-mo-c-c0xffffffff-rj-k-no", "https://pt.wikipedia.org/wiki/Metallica")