var clic = 1;
btnMenu.addEventListener("click", divLogin)

function divLogin() {
    console.log("hola");
    if (clic == 1) {
        document.getElementById("lista").style.display = 'block';
        clic = clic + 1;
    } else {
        document.getElementById("lista").style.display = 'none';
        clic = 1;
    }
}