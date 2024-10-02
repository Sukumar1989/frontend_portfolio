// humbergery menu section start
let menuIcon = document.querySelector('.mobile_menubar');
let nav_section = document.querySelector('.nav__section')
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    nav_section.classList.toggle('active')

})

// humbergery menu section end