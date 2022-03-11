let btn = document.getElementById('dark-mode');
let isDarkMode = false;

function changeStyle (e) {
    if (isDarkMode) {
        document.body.style.color='black';
        document.body.style.backgroundColor='white';
        btn.innerText='Toggle for dark mode';
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
