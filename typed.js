
window.addEventListener('scroll', isElementVisible);

function isElementVisible(){
    console.log("starting");
    const element = document.getElementById("aboutMe");
    const bounding = element.getBoundingClientRect();
    console.log(bounding.bottom);
    console.log(window.innerHeight)
    if (bounding.top >= 0 && bounding.bottom-1000 <= window.innerHeight){
        var typed = new Typed('#typed', {
            strings: ["Passionné par la programmation, j'ai acquis une solide expérience dans différents langages de programmation et dans la résolution de problèmes complexes. J'aime travailler sur des projets qui ont un impact concret sur les utilisateurs, qu'il s'agisse de créer des applications web, des sites web ou des logiciels. Je suis curieux et toujours à l'affût de nouvelles technologies et de nouvelles approches pour améliorer mes compétences en programmation et réaliser des projets innovants. Je suis également un joueur passionné, ce qui m'aide à rester créatif et à trouver des solutions originales pour répondre aux défis techniques auxquels je suis confronté."],
            typeSpeed: 20,
            backSpeed: 0,
            loop: false
        });
        console.log("visible");
        window.removeEventListener('scroll', isElementVisible);
    }
}

isElementVisible()