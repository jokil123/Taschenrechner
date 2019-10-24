/*
document.getElementById("changeTheme").addEventListener("click"), function() {
    document.body.classList.toggle("dark-theme");
}
*/

var style = 0
var styleName = ""


style = parseInt(localStorage.getItem("style"));
if (isNaN(style) == true) {
    localStorage.setItem("style", 0);
}

document.getElementById('themeSheet').href = numName();

function changeTheme() {
    document.getElementById('themeSheet').href = numName();
}

function numName() {
    switch (style) {
        case 0:
            styleName = "style/themes/light_theme.css"
            localStorage.setItem("style", 0);
            style += 1;
            break;

        case 1:
            styleName = "style/themes/dark_theme.css"
            localStorage.setItem("style", 1);
            style += 1;
            break;
        
        case 2:
            style = 0
            numName()
            break;

        default:
                styleName = "style/themes/light_theme.css"
                localStorage.setItem("style", 0);
                style += 1;
            break;
    }

    return styleName;
}