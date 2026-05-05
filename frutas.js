const frutas = ["Abacaxi", "Maçã", "Banana","Uva", "Manga"];


console.log(frutas);

frutas[0] = "Abacaxi"
console.log(frutas);

frutas[1] = "Maçã"
console.log(frutas);

frutas[2] = "Banana"
console.log(frutas);

frutas[3] = "Uva"
console.log(frutas);

frutas[4] = "Manga"
console.log(frutas);
console.log(frutas.legth)
frutas.push("Manga");

const removido = frutas.pop();
console.log(frutas)
console.log(removido)
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("Uva"));
console.log(frutas.indexOf("Banana"));