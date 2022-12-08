const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

const redirectNavLogo = document.getElementById("redirectNavExampleID");
redirectNavLogo.addEventListener("click", function(){
     let response = window.confirm("Are you sure you want to be redirected away from this page?");
     if (response) {
          
     } else{

     }
})
