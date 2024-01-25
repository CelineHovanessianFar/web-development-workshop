function typeEffect(element, container, text, delay = 100) {
  let textArray = text.split('');
  let currentIndex = 0;
  element.innerHTML = '';
  container.style.opacity = 1; // Make the container element visible

  let typeTimer = setInterval(function() {
      if (currentIndex < textArray.length) {
          element.append(textArray[currentIndex]);
          currentIndex++;
      } else {
          clearInterval(typeTimer);
      }
  }, delay);
}

// Apply the typing effect with delays
window.onload = function() {
  const helloText = document.getElementById('hello');
  const celineText = document.getElementById('celine');
  const dataScientistText = document.getElementById('data-scientist');
  const containerHello = document.getElementById('container-hello');
  const containerCeline = document.getElementById('container-celine');
  const containerDataScientist = document.getElementById('container-data-scientist');

  const helloTextDelay = helloText.textContent.length * 100;
  const celineTextDelay = celineText.textContent.length * 100;

  typeEffect(helloText, containerHello, helloText.textContent, 100);
  setTimeout(() => typeEffect(celineText, containerCeline, celineText.textContent, 100), helloTextDelay + 100); // 1s after helloText
  setTimeout(() => typeEffect(dataScientistText, containerDataScientist, dataScientistText.textContent, 100), helloTextDelay + celineTextDelay + 1000); // 1s after celineText
};



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


  