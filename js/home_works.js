// send mail

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w+@gmail\.com$/

gmailButton.onclick = () => {
	if (regExp.test(gmailInput.value)) {
		gmailResult.innerHTML = 'Удачного путешествия, пират!'
		gmailResult.style.color = 'green'
	} else {
		gmailResult.innerHTML = 'Вы допустили ошибку при вводе почты'
		gmailResult.style.color = 'red'
	}
}

// move block

const childBlock = document.querySelector('.child_block')
let posX = 0
let posY = 0
const maxWidthOfParentBLock = 449

const moveChildBlock = () => {
	if (posX <= maxWidthOfParentBLock && posY === 0){
		childBlock.style.transform = 'rotate(180deg)'
		posX++
		childBlock.style.left = `${posX}px`
		requestAnimationFrame(moveChildBlock)
	}else if (posX >= maxWidthOfParentBLock && posY <= maxWidthOfParentBLock){
		childBlock.style.transform = 'rotate(270deg)'
		posY++
		childBlock.style.top= `${posY}px`
		requestAnimationFrame(moveChildBlock)
	}else if (posY >= maxWidthOfParentBLock && posX > 0) {
		childBlock.style.transform = 'rotate(0deg)'
		posX--
		childBlock.style.left = `${posX}px`
		requestAnimationFrame(moveChildBlock)
	}else if (posY >= 0 && posX <= maxWidthOfParentBLock){
		childBlock.style.transform = 'rotate(90deg)'
		posY--
		childBlock.style.top = `${posY}px`
		requestAnimationFrame(moveChildBlock)
	}
}

moveChildBlock()

// stopwatch

const valueOfSeconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const stop = document.querySelector('#stop')
let number = 0
let intervalId

start.onclick = () => {
	start.setAttribute('disabled', 'true')//если что я знаю другой способ но выбрал этот потому что он легче
	start.style.cursor  = 'not-allowed'
	intervalId = setInterval(() => {
		number++
		valueOfSeconds.innerHTML = number
	}, 1000)
}

reset.onclick = () => {
	number = 0
	clearInterval(intervalId)
	valueOfSeconds.innerHTML = number
	start.removeAttribute('disabled')
	start.style.cursor  = 'pointer'
}

stop.onclick = () => {
	clearInterval(intervalId)
	start.removeAttribute('disabled')
	start.style.cursor  = 'pointer'
}