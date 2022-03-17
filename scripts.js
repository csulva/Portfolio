let btn = document.getElementById("dark-mode");
let isDarkMode = window.localStorage.getItem('isDarkMode') === 'true';
console.log(typeof isDarkMode);
let btnsize = document.getElementById("text-size");

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
    if (isDarkMode) {
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


function changeFontSize(e) {
  if (btnsize.textContent == "+") {
    document.body.style.fontSize += 2;
  } else if (btnsize.textContent == "-") {
    document.body.style.fontSize -= 2;
  }
}

btn.addEventListener("click", changeStyle);
btnsize.addEventListener("click", changeFontSize);
document.addEventListener('DOMContentLoaded', (event) => {
    copyChangeStyle();
  })
