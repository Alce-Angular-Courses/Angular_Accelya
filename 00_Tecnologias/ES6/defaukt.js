function calcIva (valor, iva = 1.20) {
    return valor *  iva
}

console.log (calcIva(100, 1))

function drawCircle ( 
    {radius = 30, 
    coords = { x: 0, y: 0} } = {}) 
    { console.log(radius, coords); }; 

drawCircle()
drawCircle({radius : 25})
drawCircle({radius : 25, coords: {x: 10, y: 10}})