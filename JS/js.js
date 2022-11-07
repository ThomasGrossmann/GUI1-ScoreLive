function showMenu() {
    // Getter of HTML elements
    var ham = document.getElementById("ham")
    var bodyOpacity = document.getElementById("opacity")
    var iconMenu = document.getElementById("iconMenu")

    // Toggle classes to make menu appears from the top
    ham.classList.toggle("-top-72")
    ham.classList.toggle("top-20")

    // Toggle body opacity
    bodyOpacity.classList.toggle("opacity-50")

    // Change navigation menu icon when clicked
    if (iconMenu.classList.contains("fa-bars")) {
        iconMenu.classList.add("fa-xmark")
        iconMenu.classList.remove("fa-bars")
    } else {
        iconMenu.classList.remove("fa-xmark")
        iconMenu.classList.add("fa-bars")
    }
}

function whoScoredWarriors() {
    var whoScored = document.getElementById("whoScored")
    var chooseW = document.getElementById("chooseW")

    whoScored.classList.toggle("hidden")
    chooseW.classList.toggle("hidden")
}

function whoScoredCeltics() {
    var whoScored = document.getElementById("whoScored")
    var chooseC = document.getElementById("chooseC")

    whoScored.classList.toggle("hidden")
    chooseC.classList.toggle("hidden")
}

function choosen() {
    var lastBasket = document.getElementById("lastBasket")
    var chooseLast = document.getElementById("chooseLast")

    chooseLast.classList.remove("opacity-50")
    lastBasket.classList.remove("bg-black")
    lastBasket.classList.remove("text-[#F3B17E]")
    lastBasket.classList.add("bg-[#F3B17E]")
    lastBasket.classList.add("text-black")
}