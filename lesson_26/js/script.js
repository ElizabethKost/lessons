"use strict"


function showMessage(text = "Нічого не вказано") {
	console.log(text)
}



//-------Задача №1
/*
Дано в html: три елементи з класом item.

При кліку на кожен з елементів додати клас active,
при повторному кліку прибрати клас 
*/
showMessage("Задача №1")

/*
document.addEventListener("click", documentActionClick)

function documentActionClick(event) {
	const targetElement = event.target
	if (targetElement.closest(".item")) {
		targetElement.classList.toggle("active")
		event.preventDefault()
		//showMessage("click") ---для перевірки себе
		//showMessage(document.querySelector(".active"))  ---для перевірки себе
	}
}

*/
//-------Задача №2
/*
Дано в css/scss: body прозорий

При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
showMessage("Задача №2")


window.addEventListener("load", pageLoaded)
function pageLoaded(event) {
	document.body.classList.add("opacity-1")
}




//-------Задача №3
/*
Дано в html: header main footer

При наведенні курсору на header змінювати колір фону у footer.

Коли курсор йде з header повертати початковий фон для footer.
*/
showMessage("Задача №3")

const headerElement = document.querySelector("header")
const footerElement = document.querySelector("footer")


if (headerElement && footerElement) {
	headerElement.addEventListener("mouseenter", () => {
		footerElement.classList.add("footer--green")
	})
	headerElement.addEventListener("mouseleave", () => {
		footerElement.classList.remove("footer--green")
	})
}
//else {
//	showMessage("Помилка знаходження header чи footer")
//}




/* 2в. через атрибут style, але таке собі
if (headerElement) {
	headerElement.addEventListener("mouseenter", () => {
		if (footerElement) {
			footerElement.style.backgroundColor = "#c2cca6"
		}
	})
	headerElement.addEventListener("mouseleave", () => {
		if (footerElement) {
			footerElement.style.backgroundColor = ""
		}
	})
}
*/

/* 3в. через mouseover для делегування багатьох

document.body.addEventListener("mouseover", documentActionMouseover)

function documentActionMouseover(event) {
	const targetElement = event.target
	//console.log(targetElement)
	if (targetElement.closest("header")) {
		//console.log(targetElement)
		showMessage("enter")
	}
	else {
		showMessage("error")
	}
}
*/






//-------Задача №4
/*
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.

Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.

Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.

Функція має запустить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно
*/
showMessage("Задача №4")


const targetItem = document.querySelector(".main-item")
// змінила клас на main-item, щоб не перекликалось з першою задачею


const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.8,
};


const callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target
		//showMessage(targetElement)
		if (entry.isIntersecting && !targetElement.hasAttribute("data-once")) {
			targetElement.dataset.once = ""
			countdownInterval()
		}
	})
}


if (targetItem) {
	const observer = new IntersectionObserver(callback, options)
	observer.observe(targetItem)
}


function countdownInterval() {
	if (parseFloat(targetItem.dataset.countMax) > 0 && parseFloat(targetItem.dataset.countdownInterval) > 0) {
		let i = 0
		let timer = setInterval(() => {
			targetItem.textContent = `${i}%`
			i === parseFloat(targetItem.dataset.countMax) ? clearInterval(timer) : null
			++i
		}, parseFloat(targetItem.dataset.countdownInterval))
	}
	//else {
	//	console.log("Помилка задання значень для data атрибутів: data-countdown-interval, data-count-max")
	//}
}

