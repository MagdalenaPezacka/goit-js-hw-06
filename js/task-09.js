function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
// /*
// Zmianę właściwości CSS umożliwia właściwość .style.
// Następnie podajemy właściwość CSS, którą chcemy zmienić,
// stosujemy tu tzw. camelCase czyli
// zamiast background-color piszemy backgroundColor.
// */

// const zmientlo=document.querySelector('#zmientlo');
// const body=document.querySelector('body');

// zmientlo.addEventListener("click", function(){
//   //użycie właściwości style zmiana właściwości background-color
//   //zapis camelCase
//   //zamiast background-color piszemy backgroundColor
//   body.style.backgroundColor='yellow'
// });
