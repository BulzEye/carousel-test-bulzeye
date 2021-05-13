let curIn = 0;
let noSlides = 4;
let nl = 2;
let nr = 1;

function changeSlides(inc) {
    showSlide(curIn + inc);
    console.log("Inc = " + inc);
}

function showSlide(n) {
    if(n<0) {
        n = noSlides-1;
    }
    else if(n==noSlides) {
        n = 0;
    }
    nl = n-1;
    nr = n+1;
    if(n==(noSlides-1)) {
        nr = 0; 
    }
    if(n==0) {
        nl = noSlides - 1;
    }

    let slides = document.getElementsByClassName("card");
    let dots = document.getElementsByClassName("dots");
    console.log(slides);
    for(let i=0; i<slides.length; i++) {
        slides[i].removeAttribute("id");
        // slides[i].style.order = "0";
    }
    for(let i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log(slides);
    console.log(nl);
    console.log(n);
    console.log(nr);
    slides[nl].id = "left";
    // slides[nl].style.order = "1";
    slides[n].id = "center";
    // slides[n].style.order = "2";
    slides[nr].id = "right";
    // slides[nr].style.order = "3";

    dots[n].className += " active";

    curIn = n;
}

showSlide(0);

function addSlide() {
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementById("subm").addEventListener("click", appendSlide);
}

function appendSlide() {
    let text = document.getElementById("contnt").value;
    let newSlide = document.createElement("div");
    newSlide.appendChild(document.createTextNode(text));
    newSlide.className = "card";
    document.getElementById("card-container").appendChild(newSlide);
    let dot = document.createElement("span");
    dot.className = "dots";
    dot.onclick = "showSlide(" + noSlides + ")";
    let dotContainer = document.getElementById("dots");
    dotContainer.innerHTML += "\n               ";
    dotContainer.appendChild(dot);
    noSlides++;
    document.getElementById("subm").removeEventListener("click", appendSlide);
    closeModal();
}

function closeModal() {
    document.getElementsByClassName("modal")[0].style.display = "none";
}