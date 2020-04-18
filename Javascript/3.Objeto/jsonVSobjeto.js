/*JSON é um formato textual, feito para comunicar sistemas completamente diferentes. */

const pessoa = {
    nome: "Giuliane",
    idade: 20

}
console.log(JSON.stringify(pessoa)) // Transforma um objeto em JSON, tipo string

console.log(JSON.parse('{"Sobrenome": "Oliveira", "idade": 20}')) //Transforma um JSON em objeto