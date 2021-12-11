// Desafio 10
function techList(list, name) {
  if (list.length === 0) return 'Vazio!';
  return (
    list.sort().map((tech) => ({ tech, name }))
  );
}

console.log(techList(['HTML', 'CSS', 'JS', 'SQL', 'React', 'NodeJs', 'Mongo'], 'Lucas'));

// Desafio 11
const phoneNumberPattern = (phoneNumber) => {
  // Separa o número em 3 grupos de 2, 5 e 4 números respectivamente
  const regEx = /(\d{2})(\d{5})(\d{4})/;
  // Transforma o arry em string e aplica a regex no array e retorna formatado com os grupos separados
  return phoneNumber.join('').replace(regEx, '($1) $2-$3');
};

function generatePhoneNumber(numberList) {
  if (numberList.length !== 11) return 'Array com tamanho incorreto.';
  const error = 'não é possível gerar um número de telefone com esses valores';
  const validateNumber = numberList.every((number) => number >= 0 && number <= 9);
  if (!validateNumber) return error;
  const checkRepeats = numberList.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  const moreThanThrice = Object.values(checkRepeats).some((number) => number >= 3);
  if (moreThanThrice) return error;
  const phoneNumber = phoneNumberPattern(numberList);
  return phoneNumber;
}

console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 9, 1, 0]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (
    lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB
  );
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  const regEx = /\d+/g;
  const result = string.match(regEx);
  const glassesOfWater = result.map((substring) => parseInt(substring, 10))
    .reduce((accumulator, number) => accumulator + number);
  return glassesOfWater > 1 ? `${glassesOfWater} copos de água` : `${glassesOfWater} copo de água`;
}

console.log(hydrate('1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
