
const obrazky = [
	{
		src: 'images/01_Bauer.jpg',
		jmeno: 'VÁCLAV Bauer'
	},
	{
		src: 'images/02_Blazkova.jpg',
		jmeno: 'KATEŘINA Blažková'
	},
	{
		src: 'images/03_Dolezal.jpg',
		jmeno: 'MAREK Doležal'
	},
	{
		src: 'images/04_Drapal.jpg',
		jmeno: 'MAXIMILIÁN Drápak'
	},
	{
		src: 'images/05_Finkova.jpg',
		jmeno: 'KATEŘINA Finková'
	},
	{
		src: 'images/06_Gribbin.jpg',
		jmeno: 'DANIEL SEBASTIAN Gribbin'
	},
	{
		src: 'images/07_Herdova.jpg',
		jmeno: 'ZDEŇKA Herdová'
	},
	{
		src: 'images/08_Janutkova.jpg',
		jmeno: 'MICHAELA Janutková'
	},
	{
		src: 'images/09_Jirotkova.jpg',
		jmeno: 'AMÁLIE Jirotková'
	},
	{
		src: 'images/10_Kocvarova.jpg',
		jmeno: 'EMA Kočvarová'
	},
	{
		src: 'images/11_Kotek.jpg',
		jmeno: 'LUKÁŠ Kotek'
	},
	{
		src: 'images/12_Kriz.jpg',
		jmeno: 'ŠTĚPÁN Kříž'
	},
	{
		src: 'images/13_Kubes.jpg',
		jmeno: 'ŠIMON Kubeš'
	},
	{
		src: 'images/14_Kubesova.jpg',
		jmeno: 'TEREZA Kubešová'
	},
	{
		src: 'images/15_Nahlikova.jpg',
		jmeno: 'MAGDALÉNA Náhlíková'
	},
	{
		src: 'images/16_Pakostka.jpg',
		jmeno: 'VOJTĚCH Palkoska'
	},
	{
		src: 'images/17_Pirosukova.jpg',
		jmeno: 'JOHANA Pirošuková'
	},
	{
		src: 'images/18_Popilek.jpg',
		jmeno: 'JAN Popílek'
	},
	{
		src: 'images/22_Salcak.jpg',
		jmeno: 'TOMÁŠ Salčák'
	},
	{
		src: 'images/23_Stejskal.jpg',
		jmeno: 'JAN Stejskal'
	},
	{
		src: 'images/24_Simunkova.jpg',
		jmeno: 'BARBORA ANNA Šimůnová'
	},
	{
		src: 'images/25_Sulista.jpg',
		jmeno: 'KRISTIÁN PETR Šulista'
	},
	{
		src: 'images/26_Sveda.jpg',
		jmeno: 'ONDŘEJ Švéda'
	},
	{
		src: 'images/27_Vegricht.jpg',
		jmeno: 'JAN Vegricht'
	},
	{
		src: 'images/28_Verboon.jpg',
		jmeno: 'MAIA Verbon'
	},
	{
		src: 'images/29_Vitu.jpg',
		jmeno: 'NELA Vítů'
	},
	{
		src: 'images/30_Vondra.jpg',
		jmeno: 'FILIP Vondra'
	},
	{
		src: 'images/31_Vrtkova.jpg',
		jmeno: 'JULIE Vrtková'
	}
	
   
];


let fotogalerieEl = document.querySelector('.galerie');

function vypsani(){
	for (let i = 0; i < (obrazky.length); i++) {

		let osoba = obrazky[i];

		let zakEl = document.createElement('div');
		zakEl.classList.add('zak');
		zakEl.innerHTML = `
		<img class="image" src="${osoba.src}" alt="${osoba.jmeno}">
		<div class="overlay">
			<p class="jmeno">${osoba.jmeno}</p>
		</div>
		`;
		
		fotogalerieEl.appendChild(zakEl);
	}
}

vypsani()

let vybrany = document.querySelectorAll('.zak');

for  (let i = 0; i < (vybrany.length); i++){
	vybrany[i].addEventListener("click", zobrazeni);
}

function zobrazeni(e){

	let vybrany = document.querySelectorAll('.overlay.viditelny');

	for  (let i = 0; i < (vybrany.length); i++){
		vybrany[i].classList.remove('viditelny');
	}

	let zakEl = e.target.closest('.zak');
	let overlayEl = zakEl.querySelector('.overlay');
	overlayEl.classList.add('viditelny');
	
}

