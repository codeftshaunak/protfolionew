let theme = localStorage.getItem('theme');
if (theme == null) {
        setTheme('light');
} else {
        setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");
let l = themeDots.length;

for (var i = 0; l > i; i++) {
        themeDots[i].addEventListener("click", function () {
                let mode = this.dataset.mode;
                setTheme(mode);
        })
}

function setTheme(mode) {
        if (mode == 'light') {
                document.getElementById('theme-style').href = './css/style.css';
        }
        if (mode == 'blue') {
                document.getElementById('theme-style').href = './css/blue.css';
        }
        if (mode == 'green') {
                document.getElementById('theme-style').href = './css/green.css';
        }
        if (mode == 'purple') {
                document.getElementById('theme-style').href = './css/purple.css';
        }
        if (mode == 'dark') {
                document.getElementById('theme-style').href = './css/dark.css';
        }

        localStorage.setItem('theme', mode)
};