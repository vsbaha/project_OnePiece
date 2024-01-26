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

somInput = document.querySelector('#som')
usdInput = document.querySelector('#usd')
belliInput = document.querySelector('#belli')

const converter = (element, targetElement, targetElement2, currentValue) => {
	element.oninput = () => {
		const request = new XMLHttpRequest()
		request.open('GET', '../json/converter.json')
		request.setRequestHeader('Content-type', 'application/json')
		request.send()
		request.onload = () => {
			const response = JSON.parse(request.response)
			switch (currentValue) {
				case 'som':
					targetElement.value = (element.value / response.usd).toFixed(2)
					targetElement2.value = (element.value / response.belli).toFixed(2)
					break
				case 'usd':
					targetElement.value = (element.value * response.usd).toFixed(2)
					targetElement2.value = ((element.value * response.usd) / response.belli).toFixed(2)
					break
				case 'belli':
					targetElement.value = (element.value * response.belli).toFixed(2)
					targetElement2.value = ((element.value / response.belli) * response.usd).toFixed(2)
					break
				default:
					break
			}
			element.value === '' && (targetElement.value = '')
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
let count = 1



const cardFetcher = (id) => {
	fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(response => response.json())
		.then(data => {
			card.innerHTML = `
				<p>${data.title}</p>
				<p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
				<span>${data.id}</span>
			`
		})
}



btnNext.onclick = () => {
	switch (count) {
		case 200:
			count = 0
			break
	}
	count++
	cardFetcher(count)
}

btnPrev.onclick = () => {
	switch (count) {
		case 1:
			count = 201
			break
	}
	count--
	cardFetcher(count)
}



cardFetcher(count)
const gettingData = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
}

gettingData()

