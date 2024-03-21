

// function setInitialLoaderVisibility() {
//     var darkMode = localStorage.getItem('darkMode') === 'true';
//     var lightLoader = document.getElementsByClassName('loader-background');
//     var darkLoader = document.getElementsByClassName('preloader');

//     // If dark mode is on, hide the light loader and show the dark loader
//     if (darkMode) {
//         for(var i = 0; i < darkLoader.length; i++) {
//             darkLoader[i].style.display = 'none';
//         }
//         for(var i = 0; i < lightLoader.length; i++) {
//             lightLoader[i].style.display = 'block';
//         }
//     } 
//     // If dark mode is off, hide the dark loader and show the light loader
//     else {
//         for(var i = 0; i < lightLoader.length; i++) {
//             lightLoader[i].style.display = 'none';
//         }
//         for(var i = 0; i < darkLoader.length; i++) {
//             darkLoader[i].style.display = 'block';
//         }
//     }
//     // After a delay, set the opacity of the preloader to 0 to start the fade-out effect
// setTimeout(function() {
//     for(var i = 0; i < darkLoader.length; i++) {
//         darkLoader[i].style.opacity = '0';
//     }
// }, 200); // 2-second delay



// function hideLoaderClass() {
//     var delay = 3000; // 1 second

//     var darkMode = localStorage.getItem('darkMode') === 'true';
//     var className = darkMode ? 'preloader' : 'loader-background';

//     setTimeout(function() {
//         var elements = document.getElementsByClassName(className);
//         for(var i = 0; i < elements.length; i++) {
//             elements[i].style.opacity = '0';
//             elements[i].style.pointerEvents = 'none';
//         }
//     }, delay);

// }
// }


//MOST RECENT WORKING
// function setInitialLoaderVisibility() {
//     var darkMode = localStorage.getItem('darkMode') === 'true';
//     var lightLoader = document.getElementsByClassName('loader-background');
//     var darkLoader = document.getElementsByClassName('preloader');

//     // If dark mode is on, hide the light loader and show the dark loader
//     if (darkMode) {
//         for(var i = 0; i < darkLoader.length; i++) {
//             darkLoader[i].style.display = 'none';
//         }
//         for(var i = 0; i < lightLoader.length; i++) {
//             lightLoader[i].style.display = 'block';
//         }
//     } 
//     // If dark mode is off, hide the dark loader and show the light loader
//     else {

//         for(var i = 0; i < lightLoader.length; i++) {
//             lightLoader[i].style.display = 'none';
//         }
//         for(var i = 0; i < darkLoader.length; i++) {
//             darkLoader[i].style.display = 'block';
//         }
//     }
// }


function setInitialLoaderVisibility() {
    var darkMode = localStorage.getItem('darkMode') === 'true';
    var lightLoader = document.getElementsByClassName('loader-background');
    var darkLoader = document.getElementsByClassName('preloader');

    // If dark mode is on, hide the light loader and show the dark loader
    if (darkMode) {
        for(var i = 0; i < darkLoader.length; i++) {
            darkLoader[i].style.display = 'none';
        }
        for(var i = 0; i < lightLoader.length; i++) {
            lightLoader[i].style.display = 'flex';
        }
    } 
    // If dark mode is off, hide the dark loader and show the light loader
    else {
        for(var i = 0; i < lightLoader.length; i++) {
            lightLoader[i].style.display = 'none';
        }
        for(var i = 0; i < darkLoader.length; i++) {
            darkLoader[i].style.display = 'flex';
        }
    }
}


function hideLoaderClass() {
    var delay = 500; // 1 second

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
