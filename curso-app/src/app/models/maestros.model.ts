export class Printer {
    constructor( public id: number | string, public nombre: string) {}
}

export interface Departamento {
    id: number | string;
    nombre: string;
}

export interface UsuarioIf {
    nombre: string;
    apellidos: string;
    telefono: string;
}

export class Usuario implements UsuarioIf {

    constructor ( public nombre: string,
        public apellidos: string,
        public telefono: string) {}

}

export interface OrdenPrint {
    usuario: UsuarioIf;
    printer: Printer;
    isColor: boolean;
    isClaro: boolean;
    dpto: Departamento;
}
