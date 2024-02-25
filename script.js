let inputbox = document.querySelector(".input-box"),
    search = document.querySelector(".search"),
    closeicon = document.querySelector(".close-icon");

search.addEventListener("click", () => inputbox.classList.add("open"));
closeicon.addEventListener("click", () => inputbox.classList.remove("open"));