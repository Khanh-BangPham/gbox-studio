// Header 

const humbergerMenu = document.querySelector('.header__top-humberger');
const headerMenu = document.querySelector('.header__menu');
const circelYellow = document.querySelector('.circel-yellow');
const circelBlue = document.querySelector('.circel-blue');
humbergerMenu.addEventListener('click', function (){
    if (humbergerMenu.classList.contains('active')){
        humbergerMenu.classList.remove('active');
        headerMenu.classList.remove('active');
        circelYellow.classList.remove('active');
        circelBlue.classList.remove('active');
        document.querySelector('body').style.overflow = "auto";
    } else {
        humbergerMenu.classList.add('active');
        headerMenu.classList.add('active');
        circelYellow.classList.add('active');
        circelBlue.classList.add('active');
        document.querySelector('body').style.overflow = "hidden";
    }
})




// FOLLOW MOUSE
const cursor = document.querySelector("#js-cmn-cursor");
const cursorInner = document.querySelector("#js-cmn-cursor__inner");
console.log(document.querySelector(".cmn-cursor"))

document.addEventListener("mousemove", function(e){
  cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
})
let elementBtn = document.querySelectorAll(".btn");
let elementA = document.querySelectorAll("a");
let elementImg = document.querySelectorAll("img")
elementA.forEach(element => {
  element.setAttribute("onmousemove", "setMouseMove()");
  element.setAttribute("onmouseout", "setMouseOut()");
});

elementImg.forEach(element => {
  element.setAttribute("onmousemove", "setMouseMove()");
  element.setAttribute("onmouseout", "setMouseOut()");
});
elementBtn.forEach(element => {
  element.setAttribute("onmousemove", "setMouseMove()");
  element.setAttribute("onmouseout", "setMouseOut()");
});
function setMouseMove(){
  cursorInner.setAttribute('style','transform: scale(2, 2)')
  cursor.classList.add('is-hover')
}
function setMouseOut(){
  cursorInner.setAttribute('style','transform: scale(1, 1)')
  cursor.classList.remove('is-hover')
}

// Back to top

let backToTop = document.querySelector(".back-to-top .arrow")

backToTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

// Scroll header 
const headerBottom = document.querySelector('.header__bottom');

function headerScroll() {
  let hisPageYOffset = 0;
  window.addEventListener('scroll', function () {
    if (pageYOffset >= 400) headerBottom.style.display = 'none';
      else headerBottom.style.display = 'inherit';
    if (hisPageYOffset > pageYOffset) headerBottom.style.display = 'inherit';
      else headerBottom.style.display = 'none';
    hisPageYOffset = pageYOffset;
  })

}
headerScroll()


//flickity lib

let carousel = document.querySelector(".main-carousel");
console.log(carousel);
var flkty = new Flickity( carousel, {
  // options
  pageDots: false,
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  freeScroll: true,
  wrapAround: true
});
var previousButton = document.querySelector(' .control .--next');
previousButton.addEventListener( 'click', function() {
  flkty.next();
});

var previousWrappedButton = document.querySelector('.control .--previous');
previousWrappedButton.addEventListener( 'click', function() {
  flkty.previous();
});

//photoswipe
