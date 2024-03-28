const modeicon = document.getElementById("mode-icon");
const root = document.documentElement.style;
const btnmode = document.getElementById("btn-mode");
const animation_bubble = document.getElementById("bubble");
const education_button = document.getElementById("education-button");
const work_button = document.getElementById("work-button");
const education_data = document.getElementById("education-data");
const job_data = document.getElementById("working-data");
let darkMode = false;

const togglebutton = document.getElementById('nav-toggle');
const navlinks = document.getElementById('nav-links');
const closetogglebutton = document.getElementById("close-nav-toggle")


togglebutton.addEventListener('click', () => {
    navlinks.classList.add('active');
})

closetogglebutton.addEventListener("click", () => {
    navlinks.classList.remove('active');
})

var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});


//SWITCH TO DARK MODE - activateDarkMode()
function darkModeProperties() {
    root.setProperty("--lm-bg-color", "rgb(25,22,39)");
    root.setProperty("--lm-primary-bg", "rgb(20 16 35)");
    root.setProperty("--lm-text-color", "#f2f1f3");
    root.setProperty("--lm-primary-text", "#f2f1f3");
    root.setProperty("--lm-secondary-text", "#bcbac4");
    root.setProperty("--lm--box-shaodow", "0px 0px 40px #151414");
    root.setProperty("--lm--input-bg", "#211d35");
    root.setProperty("--lm-footer-bg", "#100e1b");
    root.setProperty("--lm-faded-text", "rgb(20 16 35)");
    root.setProperty(" --Im-para-text", "#bcbac4");
    animation_bubble.style.opacity = "0";
    darkMode = true;
    modeicon.src = "./images/sun-icon.svg"

    localStorage.setItem("dark-mode", true)

}

//SWITCH TO LIGHT MODE - activateLightMode()
function lightModeProperties() {
    root.setProperty("--lm-bg-color", "#fff");
    root.setProperty("--lm-primary-bg", "rgb(231, 231, 231)");
    root.setProperty("--lm-text-color", "#000");
    root.setProperty("--lm-primary-text", "#343d68");
    root.setProperty("--lm-secondary-text", "#000");
    root.setProperty("--lm--box-shaodow", "0px 0px 40px #1f1f1f");
    root.setProperty("--lm--input-bg", "#fff");
    root.setProperty("--lm-footer-bg", "rgb(52,61,104)");
    root.setProperty("--lm-faded-text", "rgb(231, 231, 231)");
    root.setProperty(" --Im-para-text", "#6d6a7c");
    modeicon.src = "./images/moon-icon.svg"
    animation_bubble.style.opacity = "1";
    darkMode = false;

    localStorage.setItem("dark-mode", false)
}

function init() {
    darkMode = false;

    // let value = localStorage.getItem("dark-mode");

    // if (value == false) {
    //     lightModeProperties();
    // }
    // else {
    //     darkModeProperties();
    // }
}


btnmode.addEventListener("click", function () {
    if (darkMode == false) {
        darkModeProperties()
    }
    else {
        lightModeProperties();
    }
});


init();

// scroll to top button 
const wrapper = document.getElementById("wrapper");
const scroll_btn = document.getElementById("scroll-btn");

wrapper.addEventListener("scroll", () => {
    if (wrapper.scrollTop > 600) {
        console.log("scrolling..");
        scroll_btn.style.display = "flex"
    }
    else {
        scroll_btn.style.display = "none"
    }
    // console.log("scrolling..");
    // console.log(wrapper.scrollTop);
})

scroll_btn.addEventListener("click", () => {
    wrapper.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

education_button.addEventListener("click", () => {
    console.log("click on qualification");
    education_data.classList.add("active");
    job_data.classList.remove("active");
});

work_button.addEventListener("click", () => {
    console.log("click on work");
    education_data.classList.remove("active");
    job_data.classList.add("active");
})