let x = 0;
let y = 0;



document.addEventListener('keydown', function (e) {
	console.log(e.keyCode);
	if (e.keyCode == 37) y += 4;
	if (e.keyCode == 39) y -= 4;
	if (e.keyCode == 38) x += 4;
	if (e.keyCode == 40) x -= 4;

	document.querySelector(".conteiner").style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;

});

// if (ch.checked == true) {
// 	lab.style.fontSize = '20px'
// }

// Устанавливаем основные события прикосновения
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null, yDown = null;

// Фиксируем изначальные координаты прикосновения
function handleTouchStart(evt) {
	const { clientX, clientY } = evt.touches[0];
	xDown = clientX; yDown = clientY;
}

// Отслеживаем движение пальца и определяем направление свайпа
function handleTouchMove(evt) {

	document.querySelector(".conteiner").style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;

	if (!xDown || !yDown) {
		return; // Если изначальные координаты не зафиксированы, прекращаем выполнение
	}

	const { clientX, clientY } = evt.touches[0];

	const xDiff = xDown - clientX;
	const yDiff = yDown - clientY;

	// Вычисляем, был ли свайп выполнен по горизонтали или вертикали
	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		console.log(xDiff > 0 ? y -= 5 : y += 5);


	} else {
		console.log(yDiff > 0 ? x += 5 : x -= 5);
	}

	// Обнуляем координаты после распознавания свайпа
	xDown = yDown = null;
}