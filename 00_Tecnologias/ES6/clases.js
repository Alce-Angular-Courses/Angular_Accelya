class Libro {
    constructor (titulo, autor) {
        this.autor = autor
        this.titulo = titulo
    }

    mostrar () {
        console.log (`
            Autor : ${this.autor}
            Titulo : ${this.titulo}
        `)
    }
}

class LibroFan extends Libro {
    constructor (titulo, autor, subgenero) {
        super(titulo, autor)
        this.subgenero = subgenero
    }
}

let libro = new LibroFan("ESDLA", "JJRT", "Alta F")
libro.editorial = "Minotauro"
libro.mostrar()
console.log(libro)