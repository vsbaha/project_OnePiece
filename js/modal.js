const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	modal.style.display = 'none'
	document.body.style.overflow = ''
}


modalTriggerButton.onclick = () => {
	openModal()
}
closeModalButton.onclick = () => {
	closeModal()
}


modal.onclick = (e) => {
	if (e.target === modal) {
		closeModal()
	}
}


const checkScrollPosition = () => {
	const scrollPosition = window.scrollY || document.documentElement.scrollTop

	if (scrollPosition >= document.documentElement.scrollHeight - window.innerHeight) {
		openModal()
		window.removeEventListener("scroll", checkScrollPosition)
	}
}
window.addEventListener("scroll", checkScrollPosition)


setTimeout(openModal, 10000)

const formElement = document.querySelector('form')

const postData = (url, data) => {
	fetch(url, {
		method: "POST",
		headers: {'Content-type': 'application/json'},
		body: data
	})
}

const bindPostData = (form) => {
	form.onsubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(form)
		const user = {}
		formData.forEach((item, index) => user[index] = item)
		const json = JSON.stringify(user)
		if (window.location.pathname === '/project/index.html'){
			postData('server.php', json)
		}else {
			postData('../server.php', json)

		}

	}
}
bindPostData(formElement)