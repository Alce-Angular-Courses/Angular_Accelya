interface LibroIf {
    autor: string;
    titulo: string;
}

class Libro implements LibroIf {

    public autor: string;
    public titulo: string;

    constructor (titulo, autor) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar () {
        console.log (`
            Autor : ${this.autor}
            Titulo : ${this.titulo}
        `);
    }
}

class LibroFan extends Libro {

    protected subgenero;

    constructor (titulo, autor, subgenero) {
        super(titulo, autor);
        this.subgenero = subgenero;
    }
}

let libro = new LibroFan('ESDLA', 'JJRT', 'Alta F');
libro.mostrar();
console.log(libro);