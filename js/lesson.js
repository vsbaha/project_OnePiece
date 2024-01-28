// lesson 1
// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = 'OK'
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerHTML = 'NOT OK'
		phoneResult.style.color = 'red'
	}
}


// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const belliInput = document.querySelector('#belli')
const APIconverter = '../json/converter.json'

const converter = (element, targetElement, targetElement2, currentValue) => {
	element.oninput = async () => {
		const response = await fetch(`${APIconverter}`)
		const data = await response.json()
		try {
			switch (currentValue) {
				case 'som':
					targetElement.value = (element.value / data.usd).toFixed(2)
					targetElement2.value = (element.value / data.belli).toFixed(2)
					break
				case 'usd':
					targetElement.value = (element.value * data.usd).toFixed(2)
					targetElement2.value = ((element.value * data.usd) / data.belli).toFixed(2)
					break
				case 'belli':
					targetElement.value = (element.value * data.belli).toFixed(2)
					targetElement2.value = ((element.value * data.belli) / data.usd).toFixed(2)
					break
				default:
					break
			}
			element.value === '' && (targetElement.value = '')
		} catch (e) {
			console.log(e)
			alert('Что-то пошло не так. Попробуйте перезагрузить страницу')
		}

	}
}
converter(somInput, usdInput, belliInput, 'som')
converter(usdInput, somInput, belliInput, 'usd')
converter(belliInput, somInput, usdInput, 'belli')

// card switcher

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const APIcardSwither = 'https://jsonplaceholder.typicode.com/todos/'
let count = 1

const cardFetcher = async (id) => {
	const response = await fetch(`${APIcardSwither+id}`)
	const data = await response.json()
	try {
		card.innerHTML = `
			<p>${data.title}</p>
			<p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
			<span>${data.id}</span>
		`
	} catch (e) {
		console.log(e)
		alert('Что-то пошло не так. Попробуйте перезагрузить страницу')
	}

}
cardFetcher(count)

btnNext.onclick = () => {
	count++
	count > 200 && (count = 1)
	cardFetcher(count)
}

btnPrev.onclick = () => {
	count--
	count < 1 && (count = 200)
	cardFetcher(count)
}

const gettingData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await response.json()
	console.log(data)
}

gettingData()

// weather
const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const URLweather = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch =  () => {
	citySearchInput.oninput = async (e) => {
		try {
			const response = await fetch(`${URLweather}?q=${e.target.value}&appid=${API_KEY}`)
			const data = await response.json()
			cityName.innerHTML = data.name || 'Город не найден'
			cityTemp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
		} catch (e) {
			console.log(e)
			alert('Что-то пошло не так. Попробуйте перезагрузить страницу')
		}

	}
}

citySearch()