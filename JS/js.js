function showMenu() {
    var element = document.getElementById("ham")
    var bodyOpacity = document.getElementById("opacity")
    var iconMenu = document.getElementById("iconMenu")
    element.classList.toggle("hidden")
    bodyOpacity.classList.toggle("opacity-50")
    
    // Change navigation menu icon when clicked
    if(iconMenu.classList.contains("fa-bars")) {
        iconMenu.classList.add("fa-xmark")
        iconMenu.classList.remove("fa-bars")
    } else {
        iconMenu.classList.remove("fa-xmark")
        iconMenu.classList.add("fa-bars")
    }
    

    // Hide the navigation menu when click outside of the menu
    /*window.addEventListener('click', function (e) {
        if (!document.getElementById('ham').contains(e.target)) {
            element.classList.toggle("hidden")
            bodyOpacity.classList.toggle("opacity-50")
        }
    });*/
}