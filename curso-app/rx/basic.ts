import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const obsArrays: Observable<any> = Rx.Observable.from([1, 2, 3, 4, 5]);

const observadorDeArrays: Observer<any> = {
    next: (x) =>  console.log('Next: ' + x),
    error: err => console.log('Error: ' + err),
    complete: () =>  console.log('Completed')
};

obsArrays.map(
    e => e + 2
).filter (
    e => e > 4
).subscribe(observadorDeArrays);


obsArrays.map(
    e => e + 12
).filter (
    e => e > 14
).subscribe(
    (x) =>  console.log('Recibido: ' + x),
    err => console.log('Error: ' + err),
    () =>  console.log('Terminado')
);
