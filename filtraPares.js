/*
function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));
*/
function filtraPares(arr) {
	return arr.filter(callback);
}

function callback(item) {
	return item % 2===0;
	//return item % 2!==0; //retorna so numeros ímpares com o implemento do operador lógico ! na função
}

const meuarray = [1, 15, 30, 45, 60, 75, 90];

console.log(filtraPares(meuarray));

