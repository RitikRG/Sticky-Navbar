const navbar = document.querySelector('.navbar');
const bottomContainer = document.querySelector('.forScroll');

let yCordinate = 0;
const myFunction=()=>{
    yCordinate = this.window.scrollY;
    
    if(yCordinate > (bottomContainer.offsetTop-navbar.offsetHeight)){
        navbar.classList.add('active')
    }
    else if ( yCordinate < (bottomContainer.offsetTop-navbar.offsetHeight)){
        navbar.classList.remove('active')
    }
}
window.addEventListener('scroll', myFunction)
