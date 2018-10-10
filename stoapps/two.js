// Poniżej deklaracja zmiennych

let macierz; //wektor wartości miesięc po miesiącu

let range = parseInt(document.getElementById('miesiace').value); //liczba miesięcy
let PMT = 100 || parseInt(document.getElementById('wplataOkresowa').value); //wpłata miesięczna
let pZero = 2000 || parseInt(document.getElementById('wplata').value); //wpłata początkowa
let ryzyko = 1.002; //stopa procentowa w formacie 1+x

rysuj();

function rysuj() {
	macierz =[];
	for (let i=0; i<range+1; i++) {
		czynnik=0;
		for (let j=0; j<i+1; j++){
			czynnik = czynnik + Math.pow(ryzyko, j);
		}
		macierz[i] = PMT * czynnik + pZero *Math.pow(ryzyko,i);
	};

	let svg = d3.select('#wykres').attr('width', 600).attr('height', 400);
	svg.select('path').remove();
	svg.selectAll('g').remove();

	let x = d3.scaleLinear()
		.domain([0, macierz.length])
		.range([0,600]);

	let y = d3.scaleLinear()
		.domain(d3.extent(macierz))
		.range([400,0]);

	// let line = d3.area()
	// 	.x(function(d,i) {return x(i); })
	// 	.y1(function(d) {return y(d); });
	
	// 	line.y0(y(0));


	let line = d3.line()
		.x(function(d,i) {return x(i); })
		.y(function(d) {return y(d); });
	
	

		svg.append('path')
			.datum(macierz)
			.transition()
			.attr('d', line)
			.attr('fill', 'transparent')
			.attr('stroke', 'blue');

		let yAxis = d3.axisRight(y);

		let xAxis = d3.axisTop(x);
		
		svg.append('g').attr("transform","translate(0,0)").call(yAxis);
		svg.append('g').attr("transform","translate(0,400)").call(xAxis);

	console.log(macierz);

}



// Poniżej liczba miesięcy

let slider = document.getElementById('miesiace');


slider.addEventListener('input', function() {
	range = parseInt(slider.value);

	let miesiace = document.getElementById('months');
	miesiace.innerHTML = range;

	rysuj();
});

// Poniżej ryzyko
let ryzyka = document.querySelectorAll('input[name=ryzyko]');

for (i of ryzyka) {
	i.addEventListener('click', function() {
		ryzyko = 1 + parseFloat(document.querySelector('input[name=ryzyko]:checked').value);
		console.log(ryzyko);
		rysuj()
	} )
}
// poniżej wpłata początkowa

let wplata = document.getElementById('wplata')
wplata.addEventListener('input', function() {
	console.log(wplata.value)
	pZero = parseInt(wplata.value);
	rysuj()
})


// poniżej pmt

let wplataOkresowa = document.getElementById('wplataOkresowa')
wplataOkresowa.addEventListener('input', function() {
	console.log(wplataOkresowa.value);
	PMT = parseInt(wplataOkresowa.value);
	rysuj()
})


// poniżej konstruowanie szeregu czasowego - to trzeba włączyć dp boku funkcji rysującej wykres




