interface Usuario {
    nombre: string;
    apellidos: string;
}

class Alumno {

    constructor (public nombre: string , public apellidos: string) {
    }
}

type Name = string;
type Persona = Usuario | Alumno ;

class Tipo {

    sNombre: Name;
    nEdad: number;
    isAlumno: boolean;

    aDatos: Array<string>;
    aNumbers: number[];
    aVarios: Array<any>;

    id: number | string;
    algo: any;
  
    oObjeto: {};
    oUser: Usuario;

    constructor() {
        // this.oUser = new Alumno ("Pepe","Perez");
        this.oUser =  {nombre: "Pepe", apellidos: "Perez"}
        this.aDatos = [];
        this.aDatos.length;
    }

    
}

class Tipica {
    constructor (public uno: string, public dos: number) {
    }
}

let ob = new Tipo();

console.log (typeof ob);
console.log( ob instanceof Tipica)