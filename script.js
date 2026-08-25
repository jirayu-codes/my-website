// Filter drinks by category when a filter button is clicked
function filterDrinks(event) {
  const selectedFilter = event.target.dataset.filter;
  const allCards = document.querySelectorAll('.drink-card');

  document.querySelector('.filter-btn.active').classList.remove('active');
  event.target.classList.add('active');

  allCards.forEach(function (card) {
    if (selectedFilter === 'all' || card.dataset.category === selectedFilter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(function (button) {
  button.addEventListener('click', filterDrinks);
});

// Show card back on hover, hide on mouse leave
function revealCard(event) {
  const card = event.currentTarget;
  card.classList.add('revealed');
}

function hideCard(event) {
  const card = event.currentTarget;
  card.classList.remove('revealed');
}

const drinkCards = document.querySelectorAll('.drink-card');
drinkCards.forEach(function (card) {
  card.addEventListener('mouseenter', revealCard);
  card.addEventListener('mouseleave', hideCard);
});
