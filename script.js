const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

$(document).ready(function() {
    // Select all elements with class 'animated-paragraph'
    $('.animated-paragraph').each(function() {
        var el = $(this);
        var text = el.text().split(' '); // Split the text into words
        el.html(''); // Empty the element

        var lineArray = []; // An array to hold each line
        var lineIndex = 0;
        lineArray.push(''); // Push an empty string onto the array

        // Loop through each word
        text.forEach(function(word) {
            // Append the word and a space
            el.append(`${word} `);

            // If the height has increased, a new line has started
            if (el.height() > 70 * (lineIndex + 1)) {
                lineIndex++; // Increase the line index
                lineArray.push(''); // Push an empty string onto the array
            }

            // Append the word and a space to the current line text
            lineArray[lineIndex] += `${word} `;
        });

        el.html(''); // Empty the element again

        // Loop through each line and add it to the element wrapped in a span
        lineArray.forEach(function(line) {
            el.append(`<p class="hidden">${line}</p>`);
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });


});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let options = {
    root: document.querySelector('#slider'),
    rootMargin: '0px',
    threshold: 0
}
  
// This finds all the items in the slider that has the most screen space, which means thats its the highlighted item
let items = Array.from(document.querySelectorAll('.slider-item')).map(item => ({
    element: item,
    ratio: 0
  }));
  
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Find the item in our array and update its ratio
      let item = items.find(i => i.element === entry.target);
      if(item) {
        item.ratio = entry.intersectionRatio;
      }
    });
  
    // Find the item with the highest ratio
    let maxItem = items.reduce((max, item) => item.ratio > max.ratio ? item : max, {ratio: 0});
  
    // Remove 'highlight' class from all items
    items.forEach(item => item.element.classList.remove('highlight'));
  
    // Add 'highlight' class to item with highest ratio
    if(maxItem.element) {
      maxItem.element.classList.add('highlight');
    }
  
  }, {
    root: document.querySelector('#slider'),
    rootMargin: '0px',
    threshold: 0
  });
  
  items.forEach(item => observer2.observe(item.element));
  
  