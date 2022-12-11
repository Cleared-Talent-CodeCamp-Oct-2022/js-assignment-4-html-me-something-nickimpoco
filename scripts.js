const toTop = document.querySelector(".to-top");
const redirectNavLogo = document.getElementById("navRedir");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

redirectNavLogo.addEventListener("click", function(){
     let response = window.confirm("This will open a new tab and send you to the author's LinkedIn page. Do you want to continue?");
     if (response===true){
        window.open("https://www.linkedin.com/in/nicholas-impoco/");
     }       
})
