function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

document.getElementById("year").innerHTML =
new Date().getFullYear();

/* Typing */
const text = "Aida Yusira";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,150);
}
}

typing();

/* Bahasa */
function setLang(lang){

if(lang=="en"){

document.getElementById("hello").innerHTML="Hello, I'm";
document.getElementById("aboutTitle").innerHTML="About Me";
document.getElementById("projectTitle").innerHTML="My Projects";
document.getElementById("contactTitle").innerHTML="Contact";

document.getElementById("heroDesc").innerHTML=
"Informatics Engineering student interested in modern website development and digital technology.";

document.getElementById("aboutText").innerHTML=
"I am a 4th semester Informatics Engineering student at Jabal Ghafur University. Interested in web development and UI design.";

document.getElementById("p1").innerHTML=
"Modern responsive movie recommendation website.";

document.getElementById("p2").innerHTML=
"Elegant modern themed website.";

document.getElementById("p3").innerHTML=
"Learning management website with clean modern design.";

}

if(lang=="id"){
location.reload();
}

}