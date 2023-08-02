// Entrevista Laboral de Google Technical Support Engineer

// Implemente la función unique_in_order que toma como argumento una secuencia 
// y devuelve una lista de elementos sin ningún elemento con el mismo valor 
// uno al lado del otro y conservando el orden original de los elementos.

//  Por ejemplo:
//  únicoEnOrden('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//  únicoEnOrden('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
//  únicoEnOrden([1,2,2,3,3])

// ['ABCDAB'] == ['A', 'B', 'C', 'D', 'A', 'B']

const input = 'AAAABBBCCDAABBB';
const output = ['A', 'B', 'C', 'D', 'A', 'B'];
// N+1
// N = 0

 function unique_in_order(input){
	const result = [];

    if(!Array.isArray(input)){
        input = input.split('');
    }

    for(let i = 0; i < input.length; i++){
        if(input[i] !== input[i+1]){
            result.push(input[i])
        }
    }

	return result;
}

const prueba = unique_in_order(input);
console.log(prueba === output);

