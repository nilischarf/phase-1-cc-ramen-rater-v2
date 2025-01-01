// index.js

// Callbacks
const handleClick = (ramen) => {
  const detailImage = document.querySelector('.detail-image')
  const name = document.querySelector('.name')
  const restaurant = document.querySelector('.restaurant')
  const ratingDisplay = document.getElementById('rating-display')
  const commentDisplay = document.getElementById('comment-display')

  detailImage.src = ramen.image
  detailImage.alt = ramen.name
  name.textContent = ramen.name
  restaurant.textContent = ramen.restaurant
  ratingDisplay.textContent = ramen.rating
  commentDisplay.textContent = ramen.comment
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
    }

    const ramenMenu = document.getElementById('ramen-menu')
    const img = document.createElement('img')
    img.src = newRamen.image
    img.alt = newRamen.name
    img.addEventListener('click', () => handleClick(newRamen))
    ramenMenu.appendChild(img)
    form.reset()
  })
}

const displayRamens = () => {
  const URL = 'http://localhost:3000/ramens'
  fetch(URL)
    .then((response) => response.json())
    .then((ramens) => {
      const ramenMenu = document.getElementById('ramen-menu')
      ramens.forEach((ramen) => {
        const img = document.createElement('img')
        img.src = ramen.image
        img.alt = ramen.name
        img.dataset.id = ramen.id
        img.addEventListener('click', () => handleClick(ramen))
        ramenMenu.appendChild(img)
        })
      })
      .catch((error) => console.error('Error fetching ramens: ', error))
}

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens()
    addSubmitListener()
  })
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
