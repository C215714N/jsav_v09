const d = document;
const menuButton = d.querySelector('nav .btn');
const menuList = d.querySelector('nav .menu');

menuButton.addEventListener('click', (e) => {
    toggle(
        menuList, 
        e.target, 
        'menu-open', 
        'menu-close'
    )
} )

function toggle(element, trigger, a,b){
    element.classList.toggle('active') ?
    trigger.classList.replace(a,b) :
    trigger.classList.replace(b,a)
}

// Expresiones regulares
let regexp = /\(\d{3,5}\)/;
let regexpObject = new RegExp(/\w{2,20}/);

let fields = d.querySelectorAll('.form-control');

fields.forEach( field => {
    field.addEventListener('input', (e) => {
        console.log(
            'numero entre parentesis: ' + 
            regexp.test(e.target.value)
        )
        console.log(
            'caracteres alfanumericos entre 5 y 20: ' + 
            regexpObject.test(e.target.value)
        )
        console.log(
            '¿el campo se valido ?: ' + 
            e.target.checkValidity()
        )
    } )
} )