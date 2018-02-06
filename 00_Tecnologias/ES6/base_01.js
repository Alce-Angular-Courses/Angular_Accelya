
const saludo = function () {
    const saludo  = { spain :"Hola" }
    // saludo.ingles = "Hello"
    console.log(saludo.spain)
}

const sumarDiez = a => a + 10

saludo()
let x = sumarDiez(2)
console.log(`
    El resultado de ...
    sumar 2 es...
    ${x}
    `

    )

{
    let data = [{precio: 12}, {precio: 34}, {precio: 19}];  
    const iva = 1.16 

    data.forEach(
        elem => {
            let precioFinal = elem.precio * iva 
              console.log(`
        Oferta:  
        El precio final es ${precioFinal}`); 
        }
    )

}   

 


