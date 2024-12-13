const startLoad = Date.now();

window.addEventListener("DOMContentLoaded", () => {
    const loadTime = Date.now() - startLoad;

    document.getElementById("load-time").textContent = `Loaded in ${loadTime}ms`;
    if(window.location.pathname.includes("/services")) {
        document.getElementsByClassName("btn")[1].classList.add("btn-selected");
        document.getElementsByClassName("btn")[1].classList.remove("btn");
    } 
    else if(window.location.pathname.includes("/contacts")) {
        document.getElementsByClassName("btn")[2].classList.add("btn-selected");
        document.getElementsByClassName("btn")[2].classList.remove("btn");
    }
    else if(window.location.pathname.includes("/temp/grid")) {
        document.getElementsByClassName("btn")[3].classList.add("btn-selected");
        document.getElementsByClassName("btn")[3].classList.remove("btn");
    }
    else if(window.location.pathname.includes("/")) {
        document.getElementsByClassName("btn")[0].classList.add("btn-selected");
        document.getElementsByClassName("btn")[0].classList.remove("btn");
    }
})