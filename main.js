function adjustCardHeight() {
    var cards = document.querySelectorAll('.mini-project-card');
    cards.forEach(function(card) {
      var width = card.offsetWidth; // Get the current width of the card
      card.style.height = width + 'px'; // Set the height equal to the width
    });
  }
  
  // Adjust height on window resize
  window.addEventListener('resize', adjustCardHeight);
  
  // Adjust height on page load
  adjustCardHeight();
  