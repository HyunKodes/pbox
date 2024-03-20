function hidePreloader() {
    var delay = 1000; // 3 seconds

    setTimeout(function() {
        var preloaders = document.getElementsByClassName('loader-background');
        for(var i = 0; i < preloaders.length; i++) {
            preloaders[i].style.opacity = '0';
            preloaders[i].style.pointerEvents = 'none'; // Add this line
        }
    }, delay);
}
