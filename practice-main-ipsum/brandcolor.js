var link = document.getElementById('dark-mode-toggle');
var checks = document.getElementsByClassName('check-image');
var loreal = document.querySelector('#loreal img');
var clorox = document.querySelector('#clorox img');
var coty = document.querySelector('#coty img');
var unilever = document.querySelector('#unilever img');
var lvmh = document.querySelector('#lvmh img');
var esteelauder = document.querySelector('#esteelauder img');

link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    document.body.classList.toggle('dark-mode');

if (document.body.classList.contains('dark-mode')) {
    for (var i = 0; i < checks.length; i++) {
        checks[i].src = './Topbox Marketing_files/check-white.png';
    }
//the format using the ? and the + new Date().getTime() is used to bypass the cache but I've only included this version for reference
            if (loreal) loreal.src = './Topbox Marketing_files/loreal_d.png?' + new Date().getTime();
            if (clorox) clorox.src = './Topbox Marketing_files/clorox_d.png';
            if (esteelauder) esteelauder.src = './Topbox Marketing_files/esteelauder_d.png';
            if (coty) coty.src = './Topbox Marketing_files/coty_d.png';
            if (lvmh) lvmh.src = './Topbox Marketing_files/lvmh_d.png';
            if (unilever) unilever.src = './Topbox Marketing_files/unilever_d.png';
} else {
    for (var i = 0; i < checks.length; i++) {
        checks[i].src = './Topbox Marketing_files/check-red.png';
    }
            if (loreal) loreal.src = './Topbox Marketing_files/loreal.png';
            if (clorox) clorox.src = './Topbox Marketing_files/clorox.png';
            if (esteelauder) esteelauder.src = './Topbox Marketing_files/esteelauder.png';
            if (coty) coty.src = './Topbox Marketing_files/coty.png';
            if (lvmh) lvmh.src = './Topbox Marketing_files/lvmh.png';
            if (unilever) unilever.src = './Topbox Marketing_files/unilever.png';
}
})
