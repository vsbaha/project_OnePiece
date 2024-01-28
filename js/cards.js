const cards = document.querySelector('.inner_card_block')
const URL = 'https://jsonplaceholder.typicode.com/posts'

async function createBlocks() {
	try {
		const response = await fetch(URL);
		const data = await response.json();

		data.forEach(item => {
			cards.innerHTML += `
        	<div class="block">
          		<img src="../images/straw_hat-members/luffy.png" alt="Изображение">
          		<h2>${item.title}</h2>
          		<p>${item.body}</p>
        	</div>
      		`;
		});
	} catch (error) {
		console.error(error)
	}
}

createBlocks()
