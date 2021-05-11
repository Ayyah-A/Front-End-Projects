
/*var date = new Date();
document.body.innerHTML = "<h3>The date today is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h3>";*/

//alert('Hello Glow Gals');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //Toggle Now
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7 }s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle'); 

    });

   
}

navSlide();



 


//Selecting elements
let emailElement = document.querySelector('#email');
let submitButton = document.querySelector('#submit-button');

console.log(emailElement)
console.log(submitButton)