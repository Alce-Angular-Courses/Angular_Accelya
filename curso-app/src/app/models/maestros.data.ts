import { Printer, Departamento } from './maestros.model';

export const PRINTERS: Array<Printer> = [
    new Printer(1, 'HP'),
    new Printer(2, 'Cannon'),
    new Printer(3, 'Brother')
];

export const DPTOS: Array<Departamento> = [
    {id: 1, nombre: 'Compras'},
    {id: 2, nombre: 'Ventas'},
    {id: 3, nombre: 'Marketing'},
    {id: 4, nombre: 'Sistemas'}
];
