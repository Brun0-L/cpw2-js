/* Recebe um array com os nomes de pessoas e retorna um array invertido
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 * // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
 */
 function invert() {
    
    let people = document.getElementById("nome").value;
    people = people.split(",");

    for (i = people.length - 1; i >= 0; i--) {
        document.write(people[i] + "<br>");
    }

    return [];
}
/*************************************************************************************************
 * Essa função recebe um array de notas e retorna uma média
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 *  // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */

function mean(grades) {
  let average = 0;
  for (let i = 0; i < grades.length; i++) {
    average = average + parseInt(grades[i]);
  }
  average = average / grades.length;
  return average;
}
let aluno = prompt("Digita o nome: ");
const notas = new Array();

for (i = 0; i < 3; i++) {
  notas.push(prompt(`Digita a nota ${i + 1}: `));
}

const media = mean(notas);
console.log(`Media: ${media}.\n`);

function isApproved(mean) {
 
  if (mean <= 7) {
    return "Reprovado.";
  } else {
    return "Aprovado.";
  }
}
console.log(isApproved(media));

/*******************************************************************************************************
 * 
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 *  * // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.
 */

function wide(strDate) {
    
    let data = strDate.split("/");
    let dia = data[0]; let mes = data[1]; let ano = data[2];

    switch (mes) {

        case "01": mes = "janeiro";
            break;
        case "02": mes = "fevereiro";
            break;
        case "03": mes = "março";
            break;
        case "04": mes = "abril";
            break;
        case "05": mes = "maio";
            break;
        case "06": mes = "junho";
            break;
        case "07": mes = "julho";
            break;
        case "08": mes = "agosto";
            break;
        case "09": mes = "setembro";
            break;
        case "10": mes = "outubro";
            break;
        case "11": mes = "novembro";
            break;
        case "12": mes = "dezembro";
            break;
        default:
            return "";
    }

    return dia + " de " + mes + " de " + ano;
}
// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}