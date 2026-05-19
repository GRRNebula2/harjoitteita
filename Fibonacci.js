//let kutsujenmaara = 0;


function fibonacci(n) {

	let tulos = 0;
	let ekaluku = 0;
	let tokaluku = 0;
	let i = 0;

	while (i <= n) {
		if (i <= 1) {
			tulos = i;
			ekaluku += i;
			} else {
			tulos = ekaluku + tokaluku;
			ekaluku = tokaluku;
			tokaluku = tulos;
		}
		i++;
	}
	return tulos;
}


function tulostaFibXKertaa (kertaa) {
	for (let i = 0; i < kertaa; i++) {
		console.log("luku: " + fibonacci(i));
		console.log("Monesko: " + (i + 1));
	}
}

tulostaFibXKertaa(16);


console.log("correct: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ....");




