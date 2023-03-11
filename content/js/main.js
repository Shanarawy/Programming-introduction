// to open the menu and close it 
const bars = document.getElementById("bar"),
      nav = document.getElementById("nav"),
      times = document.getElementById("times");

bars.onclick = function(){
    "use strict";
    nav.style.display = "block"
    if (window.innerWidth <=600){
        nav.style.width = "100%"
    }
}
times.onclick = function(){
    "use strict";
    nav.style.display = "none"
}

// to show the bars icon and times icon

window.onload = function(){
    "use strict";
    setInterval(function(){
        if (window.innerWidth >= 768){
            nav.style.display = "block"
            nav.style.display = "300px"
        }
    },500)
}
// add active class 
const links = document.querySelectorAll("nav ul li"),
      contents = document.querySelectorAll(".content");
listOfHref = []
document.querySelectorAll("nav ul li a").forEach(myfunc)
function myfunc(el){
    listOfHref.push(el.getAttribute("href").replace("#",""))
}
var scrollPosition = document.documentElement.scrollTop;
    window.onscroll = function(){contents.forEach((content)=>{
        if (pageYOffset >= content.offsetTop - content.offsetHeight * 0.25 &&
            pageYOffset <
              content.offsetTop + content.offsetHeight - content.offsetHeight * 0.25){ 
            const  currentId = content.attributes.id.value;
            
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    })
function removeAllActiveClasses(){
    document.querySelectorAll("nav ul li ").forEach((it) =>{
        it.classList.remove("active");
    })
}
function addActiveClass(id){
    links[listOfHref.indexOf(id)].classList.add("active")
};
    }
links[9].onclick = function(){
    window.scrollTo(100,0)
}