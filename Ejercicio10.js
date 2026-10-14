let totalCompra = 150000;
let esCliente = true;
let desc = 0;

if (totalCompra > 100000) {
    desc = esCliente ? 0.20 : 0.10;
} else {
    desc = esCliente ? 0.05 : 0;
}

let descuento = totalCompra * desc;
let totalFinal = totalCompra - descuento;

console.log(`Descuento: ${desc * 100}% ($${descuento})`);
console.log(`Total a pagar: $${totalFinal}`);