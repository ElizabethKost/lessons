"use strict"

function showMessage(text = "Нічого не вказано") {
	console.log(text)
}

//-------Задача №1
// Отримати в константу елемент <body>
showMessage("Задача №1")

const elementBody = document.body
showMessage(elementBody)


//-------Задача №2
/*Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)*/
showMessage("Задача №2")
showMessage("Задача №2.1")


function createListBody(itemNumber) {
	itemNumber = parseInt(itemNumber)
	if (isFinite(itemNumber) && itemNumber >= 1) {
		const elementUl = document.createElement(`ul`)
		elementBody.prepend(elementUl)
		for (let i = 1; i <= itemNumber; ++i) {
			elementUl.insertAdjacentHTML("beforeend", `<li> Пункт №${i} </li>`)
		}
		return elementBody
	}
	else {
		return `Невірно задано кількість пунктів списку`
	}
}


showMessage(createListBody("8pc"))

//--не оптимізована функція 
/*
function createListBody(itemNumber) {
	itemNumber = parseInt(itemNumber)
	if (isFinite(itemNumber) && itemNumber >= 1) {
		const elementUl = document.createElement(`ul`)
		for (let i = 1; i <= itemNumber; ++i) {
			const elementLi = document.createElement(`li`)
			elementLi.textContent = `Пункт №${i}`
			elementUl.insertAdjacentElement("beforeend", elementLi)
		}
		elementBody.insertAdjacentElement("afterbegin", elementUl)
		return elementBody
	}
	else {
		return `Невірно задано кількість пунктів списку`
	}
}
*/

showMessage("Задача №2.2")
// тут спробувала створити функцію, яка додає список в тег footer якщ він існує (з html його видалила)

function createNewListFooter(itemNumber) {
	const elementFooter = document.querySelector(`footer`)
	if (elementFooter && isFinite(itemNumber) && itemNumber >= 1) {
		const elementNewUl = document.createElement(`ul`)
		elementBody.prepend(elementNewUl)
		for (let i = 1; i <= itemNumber; ++i) {
			elementNewUl.insertAdjacentHTML("beforeend", `<li> Пункт №${i} </li>`)
		}
		return elementBody
	}
	else {
		return `Помилка створення`
	}
}

showMessage(createNewListFooter("5"))




//-------Задача №3
/*Додати до елементу <body> клас loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зелений.*/
showMessage("Задача №3")

elementBody.classList.add(`loaded`)

if (elementBody.classList.contains(`loaded`)) {
	elementBody.style.color = `green`
}


showMessage(elementBody)


//-------Задача №4
/*Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередині кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
showMessage("Задача №4")

const liElements = document.querySelectorAll(`.item`)
if (liElements.length) {
	liElements.forEach((value, index) => {
		value.classList.add(`active`)
		value.textContent = `Елемент №${++index}`
	})
}


showMessage(liElements)



//-------Задача №5
/* Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скролл сторінки до кнопки */
showMessage("Задача №5")



const elementButton = document.querySelector(`.button`)

function scrollToBlock(element) {
	const dataScrollPosition = element.dataset.scroll
	showMessage(element.dataset.scroll)
	element.scrollIntoView({
		block: dataScrollPosition,
		inline: "nearest",
		behavior: "smooth"
	})
}

scrollToBlock(elementButton)



//-------Задача №6
/* Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення атрибуту, та, якщо значення менше 200
пофарбувати колір тексту посилання в червоний
*/
showMessage("Задача №6")

const elementLink = document.querySelector(`.link`)

elementLink && elementLink.tagName === "A" ? elementLink.dataset.value = 100 : showMessage(`Помилка створення дата атрибуту`)
//elementLink.dataset.value = `100c`
showMessage(elementLink.dataset.value)
if (parseFloat((elementLink.dataset.value)) < 200) {
	elementLink.style.color = `red`
	showMessage(elementLink.style.color)
}

showMessage(elementLink)