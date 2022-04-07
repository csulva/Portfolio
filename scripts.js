let btn = document.getElementById("dark-mode");
let isDarkMode = window.localStorage.getItem('isDarkMode') === 'true';
console.log(typeof isDarkMode);
let btnAdd = document.getElementById("text-plus");
let btnMinus = document.getElementById("text-minus")
let fontSize = 1;

function changeStyle(e) {
  if (isDarkMode) {
    document.body.style.backgroundColor = "white";
    document.body.style.color='black';
    btn.innerText = "Toggle for dark mode";
    // btn.style.hover.backgroundColor='yellow';  --> use mouse over event listener
    window.localStorage.setItem("isDarkMode", false);
    isDarkMode = false;
  } else {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "grey";
    btn.innerText = "Revert to original settings";
    window.localStorage.setItem("isDarkMode", true);
    isDarkMode = true;
  }
}

function copyChangeStyle(e) {
    if (!isDarkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color='black';
      btn.innerText = "Toggle for dark mode";
      // btn.style.hover.backgroundColor='yellow';  --> use mouse over event listener
    } else {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "grey";
      btn.innerText = "Revert to original settings";
    }
  }

function changeFontSize(size=0.1) {
    fontSize += size;
    document.body.style.fontSize = fontSize.toString() + 'rem';
}


btn.addEventListener("click", changeStyle);
btnAdd.addEventListener("click", () => {
  changeFontSize(0.1)
});
btnMinus.addEventListener("click", () => {
  changeFontSize(-0.1)
})
document.addEventListener('DOMContentLoaded', (event) => {
    copyChangeStyle();
  })
