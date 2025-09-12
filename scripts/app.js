function init (){


    const btn = document.getElementById("theme");
    const icon = document.getElementById("icon");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")){
    icon.src="./assets/sun.svg"
    
  }
  else {
    icon.src="./assets/moon.svg"
  }
});

}
document.addEventListener('DOMContentLoaded' , init)

