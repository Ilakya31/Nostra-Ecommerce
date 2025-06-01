var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


// navbar--section__menu displays 

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("sidenav");
    const openBtn = document.getElementById("menu_id");
    const closeBtn = document.getElementById("close");

    if (popup && openBtn && closeBtn) {
      openBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
        popup.classList.add("show");
      });

      closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        popup.classList.remove("show");
      });
    }
  });

//discount--section__close 
 document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("discount--section");
    const closeBtn = document.getElementById("discount--section__close");

    if (banner && closeBtn) {
      closeBtn.addEventListener("click", function () {
        banner.style.display = "none"; // or use .classList.add("hidden") if using a hidden class
      });
    }
  });