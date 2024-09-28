document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
  
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          const hash = this.hash;
          const targetElement = document.querySelector(hash);
  
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
  
            setTimeout(function () {
              window.location.hash = hash;
            }, 800);
          }
        }
      });
    });
  
    const menuLinks = document.querySelectorAll(".menu-items a");
    menuLinks.forEach(function (menuLink) {
      menuLink.addEventListener("click", function () {
        document.getElementById("checkbox").checked = false;
      });
    });
  });
  