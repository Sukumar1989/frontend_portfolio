// humbergery menu section start


let navMenu = document.getElementById("nav_menu");
navMenu.style.maxHeight = "0px";

function toggleMenu(){
    if(navMenu.style.maxHeight == "0px")
    {
        navMenu.style.maxHeight = "300px";
    }
    else{
        navMenu.style.maxHeight = "0px";
    }
}

// humbergery menu section end