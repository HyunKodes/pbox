document.addEventListener("DOMContentLoaded", function() {
    var darkMode = localStorage.getItem('darkMode') === 'true';
    var lightLoader = document.getElementsByClassName('loader-background')[0];
    var darkLoader = document.getElementsByClassName('preloader')[0];
  
    // If dark mode is on, hide the light loader and show the dark loader
    if (darkMode) {
      darkLoader.style.display = 'none';
      lightLoader.style.display = 'flex';
    } 
    // If dark mode is off, hide the dark loader and show the light loader
    else {
      lightLoader.style.display = 'none';
      darkLoader.style.display = 'flex';
    }
  });
  

function hideLoaderClass() {
    var delay = 1000; // 1 second

    var darkMode = localStorage.getItem('darkMode') === 'true';
    var className = darkMode ? 'loader-background' : 'preloader';

    setTimeout(function() {
        var elements = document.getElementsByClassName(className);
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = '0';
            elements[i].style.pointerEvents = 'none';
        }
    }, delay);
}
