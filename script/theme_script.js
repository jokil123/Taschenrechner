var style = ""


style = localStorage.getItem("style");
if (style === null) {
    localStorage.setItem("style", "style/themes/light_theme.css");
}

document.getElementById('themeSheet').href = style;

function changeTheme(style) {
    document.getElementById('themeSheet').href = style;
    localStorage.setItem("style", style);
}