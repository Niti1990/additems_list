const ol = document.createElement('ol')
let animals = []
function addNew() {
	let inputValue = document.querySelector('#listForm input').value
	const li = document.createElement('li')
	li.innerHTML = inputValue
	ol.appendChild(li)
	document.querySelector('.list-container').appendChild(ol)
	inputValue = ''
}
