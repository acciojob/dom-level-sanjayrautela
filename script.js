//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Get the element with the id 'level'
  const targetElement = document.getElementById('level');

  // Function to calculate DOM level
  function calculateDomLevel(element) {
    let domLevel = 0;
    let currentNode = element;

    // Traverse up the DOM tree and count levels
    while (currentNode.parentNode) {
      domLevel++;
      currentNode = currentNode.parentNode;
    }

    return domLevel;
  }

  // Get the DOM level of the target element
  const domLevel = calculateDomLevel(targetElement);

  // Display the result using alert
  alert(`The level of the element is: ${domLevel}`);
});
