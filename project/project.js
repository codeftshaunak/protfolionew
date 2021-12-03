const ArrayListLandingPage = [{
        projecttitle: 'lending page',
        projectname: 'Full Page Website',
        image: '../img/fullpagewebsite.jpg',
        live: 'https://fullpagewebsite.netlify.app',
        code: 'https://github.com/codeftshaunak/Full-Page-Website'
}, {
        projecttitle: 'lending page',
        projectname: 'Agency Website',
        image: '../img/agencywebsite.jpg',
        live: 'https://yashagency.netlify.app',
        code: 'https://github.com/codeftshaunak/Agency_website'
}, {
        projecttitle: 'lending page',
        projectname: 'Blog Website',
        image: '../img/blogwebsite.jpg',
        live: 'https://sagardeyyashblog.netlify.app',
        code: 'https://github.com/codeftshaunak/Blog-Site'
}, {
        projecttitle: 'lending page',
        projectname: 'Hulu Website',
        image: '../img/hulu.jpg',
        live: 'https://hulumovies.netlify.app',
        code: 'https://github.com/codeftshaunak/HuluWebsite_Clone'
}, {
        projecttitle: 'lending page',
        projectname: 'Netflix',
        image: '../img/netflix.jpg',
        live: 'https://netflixwebsite.netlify.app',
        code: 'https://github.com/codeftshaunak/Netflix_Website'
}, {
        projecttitle: 'lending page',
        projectname: 'Santa Landing Page',
        image: '../img/santa-m.jpg',
        live: 'https://saint-mattien-landing-page.netlify.app',
        code: 'https://github.com/codeftshaunak/Landing-Page'
}, {
        projecttitle: 'lending page',
        projectname: 'Cofee Shop',
        image: '../img/cofeeshop.jpg',
        live: 'https://cofee-shop.netlify.app',
        code: 'https://github.com/codeftshaunak/CofeeShop'
}, {
        projecttitle: 'lending page',
        projectname: 'Pool Site',
        image: '../img/wp-pool.jpg',
        live: 'https://wpwebsite.netlify.app',
        code: 'https://github.com/codeftshaunak/WP-Pool'
}];

const ArrayListJavaScript = [{
        projecttitle: 'JavaScript Project',
        projectname: 'StopWatch',
        image: '../img/stopwatch.jpg',
        live: 'https://stop-watch-with-js.netlify.app',
        code: 'https://github.com/codeftshaunak/Stopwatch-JavaScript'
}, {
        projecttitle: 'JavaScript Project',
        projectname: 'DigitalWatch',
        image: '../img/digitalwatch.jpg',
        live: 'https://digital-watch-with-js.netlify.app',
        code: 'https://github.com/codeftshaunak/Digital-Clock-With-JavaScript'
}, {
        projecttitle: 'JavaScript Project',
        projectname: 'New Year App',
        image: '../img/newyearapp.jpg',
        live: 'https://newyear-re.netlify.app',
        code: 'https://github.com/codeftshaunak/New--year-project'
}, {
        projecttitle: 'JavaScript Project',
        projectname: 'Quiz App',
        image: '../img/quizapp.jpg',
        live: 'https://quiz-application-a.netlify.app',
        code: 'https://github.com/codeftshaunak/Quiz-App'
}, {
        projecttitle: 'JavaScript Project',
        projectname: 'Food Recipe',
        image: '../img/foodrecipe.jpg',
        live: 'https://food-recipe-webaplication.netlify.app',
        code: 'https://github.com/codeftshaunak/Food-Recipe-Application'
}, {
        projecttitle: 'JavaScript Project',
        projectname: 'Memory Game',
        image: '../img/memorygame.jpg',
        live: 'https://memory-game-webapp.netlify.app',
        code: 'https://github.com/codeftshaunak/Memory-Game'
}];

const ArrayListReactJs = [{
        projecttitle: 'React Js Project',
        projectname: 'Netflix Best Series',
        image: '../img/netflixbestseries.jpg',
        live: 'https://netflix-best-serise.netlify.app/netflix'
}, {
        projecttitle: 'React Js Project',
        projectname: 'Protfolio',
        image: '../img/protfolio.jpg',
        live: 'https://sagardeyyash.netlify.app/'
}, {
        projecttitle: 'React Js Project',
        projectname: 'React Js Website',
        image: '../img/animatedwebsite.jpg',
        live: 'https://reactjswebsite1.netlify.app'
}, {
        projecttitle: 'CRUD Application',
        projectname: 'React Js Website',
        image: '../img/crudapp.png',
        live: 'https://contact-book-reactjs.netlify.app/'
}];

const post_id = document.getElementById('item-post');
console.log(post_id);
const body_protfolio = document.getElementById('body-protfolio');

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
                document.getElementById('theme-style').href = '../css/style.css';
        }
        if (mode == 'blue') {
                document.getElementById('theme-style').href = '../css/blue.css';
        }
        if (mode == 'green') {
                document.getElementById('theme-style').href = '../css/green.css';
        }
        if (mode == 'purple') {
                document.getElementById('theme-style').href = '../css/purple.css';
        }
        if (mode == 'dark') {
                document.getElementById('theme-style').href = '../css/dark.css';
        }

        localStorage.setItem('theme', mode)
};


function myFunction() {
        alert("sagardeyyash19@gmail.com");
}

//Project JavaScript
function showData() {
        for (let i = 0; i < ArrayListLandingPage.length; i++) {
                landingPage(ArrayListLandingPage[i]);
        }
        for (let i = 0; i < ArrayListJavaScript.length; i++) {
                javaScript(ArrayListJavaScript[i]);
        }
        for (let i = 0; i < ArrayListReactJs.length; i++) {
                reactJs(ArrayListReactJs[i]);
        }
};

function landingPage(data) {
        const post = document.createElement('div');
        post.classList.add('add_post');
        post.innerHTML = `
          <div class="flip">
          <img class="thumbles" src="${data.image}" alt="${data.projectname}">
          <div class="post-preview" style="height:auto">
               <a href="${data.live}" target="_blank"> <span class="post-title">${data.projectname}</span></a>
          <div class="inside-doc">  
                <a href="${data.live}" target="_blank"><i class="fab fa-connectdevelop"></i></a>
                <a href="${data.code}" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          </div>
          </div>
        `
        post_id.appendChild(post);
};

function javaScript(data) {
        const post = document.createElement('div');
        post.classList.add('add_post');
        post.innerHTML = `
          <div class="flip">
          <img class="thumbles" src="${data.image}" alt="${data.projectname}">
          <div class="post-preview" style="height:auto">
               <a href="${data.live}" target="_blank"> <span class="post-title">${data.projectname}</span></a>
          <div class="inside-doc">  
                <a href="${data.live}" target="_blank"><i class="fab fa-connectdevelop"></i></a>
                <a href="${data.code}" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          </div>
          </div>
        `
        post_id.appendChild(post);
}

function reactJs(data) {
        const post = document.createElement('div');
        post.classList.add('add_post');
        post.innerHTML = `
          <div class="flip">
          <img class="thumbles" src="${data.image}" alt="${data.projectname}">
          <div class="post-preview" style="height:auto">
               <a href="${data.live}" target="_blank"> <span class="post-title">${data.projectname}</span></a>
          <div class="inside-doc">  
                <a href="${data.live}" target="_blank"><i class="fab fa-connectdevelop"></i></a>
                <a href="${data.code}" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          </div>
          </div>
        `
        post_id.appendChild(post);
}

showData();