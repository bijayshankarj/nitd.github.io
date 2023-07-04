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
// var firstname=document.getElementById("firstname");
// var lastname=document.getElementById("lastname");
// var phone=document.getElementById("phone");
// var email=document.getElementById("email");
// var message=document.getElementById("message");

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bijay.shankar4321@gmail.com",
        Password : "E697798911DE11C105987E652EC46C1DB028",
        To : 'bjcrazytechz@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry @NITD",
        Body : "First Name: " + document.getElementById("firstname").value 
        + "<br> Last Name: " + document.getElementById("lastname").value 
        + "<br> Phone: " + document.getElementById("phone").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("message sent sucessfully")
);
}
