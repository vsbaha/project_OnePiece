// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

//  TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let intervalId

const autoTab = (i = 0) => {
    intervalId = setInterval(() => {
        i++
        if (i > tabItems.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoTab()

const hideTabContent = () => {
    tabContents.forEach((tabBlock) => {
        tabBlock.style.display = 'none'
    })
    tabItems.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'flex'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (e) => {
    if (e.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (e.target === tabItem) {
                clearInterval(intervalId)
                hideTabContent()
                showTabContent(tabIndex)

                // После остановки интервала, она запускается заново через 10 секунд
                // Если этого не нужно было делать то можно просто убрать этот кусок кода ↓
                setTimeout(() => {
                    autoTab(tabIndex)
                }, 10000)
            }
        })
    }
}

// persons DZ4



const getPersonData = () => {
    const request = new XMLHttpRequest()

    request.open('GET', './json/persons.json')

    request.setRequestHeader('Content-type', 'application/json')

    request.send()

    request.addEventListener('load', () => {
        const personsData = JSON.parse(request.response)
        const setPerson = (i = 0) => {
            personsSlides.forEach((currentSlide) => {
                currentSlide.querySelector("h4").innerHTML = personsData[i].name
                currentSlide.querySelector("img").src = personsData[i].image
                currentSlide.querySelector(".person_age").innerHTML = personsData[i].age
                currentSlide.querySelector(".person_reward").innerHTML = personsData[i].reward
                currentSlide.querySelector(".person_strong_sides").innerHTML = personsData[i].strongSides
                i++
            })
        }

        setPerson()
    })
}

getPersonData()

const personsSlides = document.querySelectorAll('.person_slide')
const personNext = document.querySelector('#person_next')
const personPrev = document.querySelector('#person_prev')
let personIndex = 0

const personHideSlide = () => {
    personsSlides.forEach((personsSlides) => {
        personsSlides.style.opacity = 0
        personsSlides.classList.remove('person_active_slide')
    })
}
const personShowSlide = (i = 0) => {
    personsSlides[i].style.opacity = 1
    personsSlides[i].classList.add('person_active_slide')
}

personShowSlide()
personShowSlide(personIndex)


const autoPersonSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > personsSlides.length - 1) {
            i = 0
        }
        personHideSlide()
        personShowSlide(i)
    }, 10000)
}

personNext.onclick = () => {
    personIndex < personsSlides.length - 1 ? personIndex++ : personIndex = 0
    personHideSlide()
    personShowSlide(personIndex)
}

personPrev.onclick = () => {
    personIndex > 0 ? personIndex-- : personIndex = personsSlides.length - 1
    personHideSlide()
    personShowSlide(personIndex)
}

autoPersonSlider(personIndex)

// async await
const URL = 'https://jsonplaceholder.typicode.com/posts' //API

const asyncFetchData = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
        alert('Что-то пошло не так. Попробуйте перезагрузить страницу')
    }

}

asyncFetchData()