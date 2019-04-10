import Band from './band.js'
import User from './user.js'

//Arrays de bandas

export const bands = []

const band1 = new Band ("Muse", "Pop-Rock", "https://upload.wikimedia.org/wikipedia/pt/1/1a/Muse_-_Follow_Me.jpg", "xxx", "yyy")
const band2 = new Band ("Metallica", "Metal", "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860", "xxx", "yyy")
const band3 = new Band ("James", "Jazz", "https://upload.wikimedia.org/wikipedia/pt/1/1a/Muse_-_Follow_Me.jpg", "xxx", "yyy")
const band4 = new Band ("Amelie Lens", "Techno", "https://upload.wikimedia.org/wikipedia/pt/1/1a/Muse_-_Follow_Me.jpg", "xxx", "yyy")

bands.push(band1,band2,band3,band4)

//Array de users

export const users = []

const user1 = new User("ricardo","12345")
const user2 = new User("Ana","12346")
const user3 = new User("ricardo","12347")

users.push(user1, user2, user3)