//Desafio Técnico 1 - Mateus de Araujo Silva
   
var numero_informado=null; 
  while(numero_informado <=0 || !Number.isInteger(+numero_informado)){
    numero_informado = prompt ("Informe um número positivo inteiro");
  }
console.log("O valor informado foi: " + numero_informado);

var somatorio=0;
for (let i = 0; i < numero_informado; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    somatorio +=i;
    console.log(i + " adicionado ao somatório");
  } 
}
console.log("O resultado do somatório dos números menores do que "+numero_informado+" divisíveis por 3 ou 5 é "+somatorio);
alert("O resultado do somatório dos números menores do que "+numero_informado+" divisíveis por 3 ou 5 é "+somatorio)