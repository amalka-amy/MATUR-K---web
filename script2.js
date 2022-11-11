
const obrazky = [
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	},
	{
		src: 'images/klucka.jpg',
		jmeno: 'Klůča Klučka'
	}
   
];


let fotogalerieEl = document.querySelector('.galerie');


for (let i = 0; i < obrazky.length; i++) {

	let osoba = obrazky[i];

	let zakEl = document.createElement('div');
	zakEl.classList.add('zak');
	zakEl.innerHTML = `
		<img class="image" src="${osoba.src}" alt="${osoba.jmeno}">
		<div class="overlay">
			<p class="text">${osoba.jmeno}</p>
		</div>
	`;

	fotogalerieEl.appendChild(zakEl);

}

