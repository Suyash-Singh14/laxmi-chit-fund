var moveBy = 5;
var movespeed = 25;
var moved = 0;
var lower = document.querySelector('.lower');
var upper = document.querySelector('.upper');
var features = document.querySelector('.features');
var initial_width = features.offsetWidth;
var features_width = initial_width;

window.addEventListener("resize", onresize);

function onresize(){
    features_width = features.offsetWidth;
    console.log(features_width);
}

document.onkeydown = function (e) {
    console.log(e.keyCode);
    // console.log(screen.width);
    // console.log((features_width-movespeed) + 'px');
    switch (e.keyCode) {
        case 68:
            if (features_width > window.innerWidth){
                lower.style.transform = "translateX(-" + (moved + moveBy) + 'px' + ")";
                upper.style.transform = "translateX(-" + (moved + moveBy) + 'px' + ")";
                moved += moveBy;
            }   
            break;

        case 65:
            lower.style.transform = "translateX(-" + (moved - moveBy) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved - moveBy) + 'px' + ")";
            if (moved > 0) {
                moved -= moveBy;
            }
            break;

        case 87:
            if (features_width > window.innerWidth){
                lower.style.transform = "translateX(-" + (moved + movespeed) + 'px' + ")";
                upper.style.transform = "translateX(-" + (moved + movespeed) + 'px' + ")";
                features.style.width = "" + (features_width-movespeed) + 'px';
                features_width-=movespeed;
                moved += movespeed;
            } 
            break;

        case 83:
            lower.style.transform = "translateX(-" + (moved - movespeed) + 'px' + ")";
            upper.style.transform = "translateX(-" + (moved - movespeed) + 'px' + ")";
            features.style.width = "" + (features_width+movespeed) + 'px';
            if(features_width<initial_width){
                features_width+=movespeed;
            }
            if (moved > 0) {
                moved -= movespeed;
            }
            break;
    }
};


gsap.to('.block div', {delay: 7, duration:1, x:'-100%', stagger:0.2})
gsap.to('.loading', {delay:2.5, duration:0.5, y:'+100px', opacity:0})
gsap.from('.logo', {opacity:0, duration:1, delay:3});
gsap.to('.logo', {opacity:0, duration:1, delay:5});

gsap.from('.upper .text', {opacity:0, duration: 0.4, y:'-100px', delay:8})
gsap.from('.car', {x:'-20vw', duration:2, delay:8.5})
// gsap.from('.feature', {scrollTrigger:'.feature', opacity:0, duration: 0.4, y:'-100px', delay:1})

var body = document.querySelector('body');
setTimeout(show_overflow, 8000);

function show_overflow(){
    body.style.overflowX = "visible";
}
