// const togglebutton = document.getElementsByClassName('toggle-button')[0]
// const togglebutton2 = document.getElementsByClassName('toggle-button2')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// togglebutton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
//     togglebutton.classList.toggle('active')
//     togglebutton2.classList.toggle('active')
// })

// togglebutton2.addEventListener('click', () => {
//     navbarLinks.classList.toggle('notactive')
//     togglebutton.classList.toggle('notactive')
//     togglebutton2.classList.toggle('notactive')
// })
var navlinks=document.getElementById("navlinks");
function showmenu(){
    // navlinks.style.display = "flex";
    // navlinks.style.transition = "2s";
    navlinks.style.right ="0";
}
function hidemenu(){
    navlinks.style.right ="-200px";
    // navlinks.style.display = "none";

}