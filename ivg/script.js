
/*var date = new Date();
document.body.innerHTML = "<h3>The date today is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h3>";*/

//alert('Hello Glow Gals');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();



 


//Selecting elements
let emailElement = document.querySelector('#email');
let submitButton = document.querySelector('#submit-button');

console.log(emailElement)
console.log(submitButton)