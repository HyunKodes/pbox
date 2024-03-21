var link = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode')) {
    document.body.classList.add('dark-mode');
    link.innerText = 'Light';
} else {
    link.innerText = 'Dark';
}

link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', true);
        link.innerText = 'Light';
    } else {
        localStorage.removeItem('darkMode');
        link.innerText = 'Dark';
    }
});
