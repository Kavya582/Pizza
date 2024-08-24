let pizzabase = document.getElementById('pizzabase');
let tomato = document.getElementById('tomato');
let cheese = document.getElementById('cheese');
let corn = document.getElementById('corn');
let capsicum = document.getElementById('capsicum');

let tomato_remove = document.getElementById('tomato_remove');
let cheese_remove = document.getElementById('cheese_remove');
let corn_remove = document.getElementById('corn_remove');
let capsicum_remove = document.getElementById('capsicum_remove');

let flag;

pizzabase.addEventListener('click',pizza_base);

function pizza_base(){
    let image = document.getElementById('image');
    image.src="";
}

tomato.addEventListener('click',tomato);

function tomato(){
    let image = document.getElementById('image');
    image.src = ""
}
