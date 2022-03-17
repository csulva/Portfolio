let btn = document.getElementById('dark-mode');
let isDarkMode = false;

function changeStyle (e) {
    if (isDarkMode) {
        window.localStorage.setItem('color', 'green')
        document.body.style.color=window.localStorage.getItem('color');
        document.body.style.backgroundColor='white';
        btn.innerText='Toggle for dark mode';
        // btn.style.hover.backgroundColor='yellow';
        isDarkMode = false;
    }
    else {
        document.body.style.color='white';
        document.body.style.backgroundColor='grey';
        btn.innerText='Revert to original settings';
        isDarkMode = true;
    }
}

btn.addEventListener('click', changeStyle)

