"use strict"


//------Задача №1------------
showMessage("Задача №1")
let someVar = 0
++someVar

if (someVar) {
	console.log(someVar)
}




//------Задача №2------------
showMessage("Задача №2")
let listItem = "Пункт №"

for (let i = 1; i <= 10; ++i) {
	console.log(listItem + i)
}




//------Задача №3------------
showMessage("Задача №3")
let helloTrue = "Привіт! В нас тут true"
let helloFalse = "Привіт! В нас тут false"
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log(helloTrue)
}
else {
	console.log(helloFalse)
}
//---Змінюємо на 2 > 5 і все Ок---
if (2 * 20 <= 10 || 30 / 2 > 5 && 10 <= "10" || 20 === "20") {
	console.log(helloTrue)
}
else {
	console.log(helloFalse)
}




//------Задача №4------------
showMessage("Задача №4")
function showMessage(text = "Нічого не вказано") {
	console.log(text)
}

let checkTypeNumber = (someVar) => typeof someVar == "number" ? someVar : false
/*
function checkTypeNumber(someVar) {
	if (typeof someVar == "number") {
		return someVar
	}
	else {
		return false
	}
}
*/

showMessage(checkTypeNumber(5))



function calcDivision(a = 0, b = 0) {
	let divisionText = "Результат ділення: "
	let divisionTextError = "ділення неможливе"
	if (checkTypeNumber(a) && checkTypeNumber(b)) {
		if (b !== 0) {
			return divisionText += a / b
		}
		else {
			return divisionText += divisionTextError
		}
	}
	else {
		return divisionText += divisionTextError
	}
}

showMessage(calcDivision(6, 3))
showMessage(calcDivision(6, "3"))
showMessage(calcDivision(6, false))
showMessage(calcDivision(6, 0))
showMessage(calcDivision(6))
showMessage(calcDivision())


//------Задача №5------------
showMessage("Задача №5")
let score = ["10", "десять", 10, "5" + 5, 5 * 3]

//--І в.
score.forEach((value, index) => {
	if (value === 10) {
		console.log(index)
		console.log(value)
	}
})

//--ІІ в.
if (score.includes(10)) {
	console.log("Вітаю! 10 з 10")
}
else {
	console.log("Все пропало!")
}

//--ІІІ в.
score.includes(10) ? console.log("Знову 10 з 10") : console.log("Все пропало!")