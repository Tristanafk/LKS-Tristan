document.addEventListener("DOMContentLoaded", function() {
    let openButton = document.querySelector("#menu-open-button");
    let menuLink = document.querySelector(".menu-link");
    let navBar = document.querySelector(".navbar");
    let closeButton = document.querySelector("#menu-close-button");

   openButton.onclick = () => {
    navBar.classList.toggle('active');
    menuLink.classList.toggle('active');
    openButton.classList.toggle('active');
   }

   closeButton.onclick = () => {
    navBar.classList.remove('active');
    menuLink.classList.remove('active');
    openButton.classList.remove('active');
   }


    var typed = new Typed(".ketik", {
        strings: ["Tristan Rasya Saputra", "X-SIJA", "Tugas Akhir", "Bpk Mujiantoro"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

   


});

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const sections = document.querySelectorAll('section[id]');

sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 60;

            let navId = document.querySelector('.navbar a[href*= ${section.id}]');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navId.classList.add("active-navlink")
            } else {
                navId.classList.remove("active-navlink")
            }
                
})
