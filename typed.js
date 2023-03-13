
window.addEventListener('scroll', isElementVisible);

function isElementVisible(){
    console.log("starting");
    const element = document.getElementById("aboutMe");
    const bounding = element.getBoundingClientRect();
    console.log(bounding.bottom);
    console.log(window.innerHeight)
    if (bounding.top >= 0 && bounding.bottom-1000 <= window.innerHeight){
        var typed = new Typed('#typed', {
            strings: ["I'm a web developer, i'm passionate about web development and i'm always looking for new challenges."],
            typeSpeed: 20,
            backSpeed: 0,
            loop: false
        });
        console.log("visible");
        window.removeEventListener('scroll', isElementVisible);
    }
}

isElementVisible()