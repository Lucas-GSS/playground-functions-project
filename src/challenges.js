// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

console.log(compareTrue(false, true));

// Desafio 2
function calcArea(triangleBase, triangleHeigth) {
  return (triangleBase * triangleHeigth) / 2;
}

console.log(calcArea(52, 1));

// Desafio 3
function splitSentence(string) {
  // O método split(separador, limite) serve para dividir uma string com base em um separador e um limite
  // Ambos argumentos são opicionais, se não forem passados todo a string é dividida.
  // O retorno é um array e a string original não é modificada
  return string.split(' ').join('');
  // O método join(separador) junta todos os elementos de um array em uma string
  // Se o separdor foi uma string vazia ele retorna todos os elementos do array colados um ao outro
  // Se não houver separador, ele retorna a string com virgulas entre cada elemento
}

console.log(splitSentence('Olá pessoas eu sou Lucas'));

// Desafio 4
function concatName(arrayOfStrings) {
  return (
    arrayOfStrings.filter((_string, index, array) => index === 0 || index === array.length - 1)
      .join(', ')
  );
}

console.log(concatName(['Gabriel', 'Angus', 'Malcon', 'Eddie', 'Bryan']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(listNumbers) {
  // Método Math.max(numbers) retorna um maior valor entre uma lista de números.
  // Para funcionar com array é necessário usar o spreade operator ou o apply(), porém essa solução é indicada para arrays pequenos
  // Para arrays granes é melhor combinar com reduce();
  const highestNumber = Math.max(...listNumbers);
  return (
    listNumbers.reduce((acc, curr) => {
      if (curr === highestNumber) {
        acc += 1;
      }
      return acc;
    }, 0)
  );
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position > cat2Position) return 'cat1';
  if (cat2Position > cat1Position) return 'cat2';
  if (cat1Position === cat2Position) return 'Os gatos trombam e o rato foge';
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  return (
    arrayOfNumbers.reduce((accumulator, number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        accumulator.push('fizzBuzz');
      } else if (number % 3 === 0) {
        accumulator.push('fizz');
      } else if (number % 5 === 0) {
        accumulator.push('buzz');
      } else {
        accumulator.push('bug!');
      }
      return accumulator;
    }, [])
  );
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let phraseToEncode = string;
  phraseToEncode = phraseToEncode.replace(/a/g, '1');
  phraseToEncode = phraseToEncode.replace(/e/g, '2');
  phraseToEncode = phraseToEncode.replace(/i/g, '3');
  phraseToEncode = phraseToEncode.replace(/o/g, '4');
  phraseToEncode = phraseToEncode.replace(/u/g, '5');
  return phraseToEncode;
}

console.log(encode('hi there'));

function decode(stringCoded) {
  let stringToDecode = stringCoded;
  stringToDecode = stringToDecode.replace(/1/g, 'a');
  stringToDecode = stringToDecode.replace(/2/g, 'e');
  stringToDecode = stringToDecode.replace(/3/g, 'i');
  stringToDecode = stringToDecode.replace(/4/g, 'o');
  stringToDecode = stringToDecode.replace(/5/g, 'u');
  return stringToDecode;
}

console.log(decode('h3 th2r2'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
