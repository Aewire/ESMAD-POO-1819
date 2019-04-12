/* 1. Crie um projeto Web chamado MyMusic que tem como objetivo principal gerir um grupo de
bandas de música. O sistema deve incluir:
a. Uma área de autenticação e registo
i. Para o registo deve ser necessário fornecer o username, password e
confirmação de password. Não podem haver dois username iguais;

b. Uma área de catálogo

i. Deve estar visível mesmo sem autenticação;
ii. Deve incluir um sistema de filtros combinados: nome da banda e género;
iii. Deve incluir um sistema de ordenação alfabética;
iv. Deve ser estruturado por meio de cards (3 por linha em disp. pequenos);
v. Cada card deve ser composto por uma imagem da banda, o nome da banda, o género de música que a banda toca e dois botões:

1. Botão ‘Ver mais’ - abre página de detalhe sobre a banda;
2. Botão ‘Remover’ - remove, após confirmação, a banda do array. 
Este botão só deve ser exibido caso o utilizador esteja autenticado.

c. uma área de detalhe da banda onde devem ser exibidos para além dos campos
anteriores: uma descrição e um vídeo da banda.

d. uma área de inserção de novas bandas composta por um formulário com os campos
necessários para resolver as alíneas anteriores. Só um utilizador autenticado pode
inserir novas bandas.
Notas:
- Os dados das bandas devem ser armazenados na LocalStorage
- Deve usar classes para modelar as entidades do sistema */

/**
 * Classe que vai modelar uma banda de musica
 */
export default class Band {
    constructor(name, genre, photo, description, video) {

        this.name = name
        this.genre = genre
        this.photo = photo
        this.description = description
        this.video = video
    }

    /* provisorio, nao sei se ta certo */
    static compare(bandA, bandB) {

        if (bandA.name < bandB.name) {
            return -1
        }
        if (bandA.name > bandB.name) {
            return 1
        }
        return 0
    }
}
/* const myBand = new Band("Imagine Dragons", "Pop/Rock", 2008, 4, US,
    "https://yt3.ggpht.com/a-/AAuE7mAcE1g-2OoMYI0_u_dm9XBnK-cmoEQKCqzilQ=s900-mo-c-c0xffffffff-rj-k-no", "https://pt.wikipedia.org/wiki/Imagine_Dragons")
const myBand2 = new Band("Metallica", "Metal", 1983, 4, UK,
    "https://yt3.ggpht.com/a-/AAuE7mAcE1g-2OoMYI0_u_dm9XBnK-cmoEQKCqzilQ=s900-mo-c-c0xffffffff-rj-k-no", "https://pt.wikipedia.org/wiki/Metallica")
const myBand3 = new Band("Muse", "Rock", 1994, 3, UK,
    "https://yt3.ggpht.com/a-/AAuE7mAcE1g-2OoMYI0_u_dm9XBnK-cmoEQKCqzilQ=s900-mo-c-c0xffffffff-rj-k-no", "https://pt.wikipedia.org/wiki/Mestallica") */