let btn1 = document.getElementById('container-1');
let btn2 = document.getElementById('container-2');
let btn4 = document.getElementById('container-4');
let btn = document.getElementsByClassName('container-2');
let tomato1 = document.getElementById('container-3');
let cheese1 = document.getElementById('container-6');
let corn1 = document.getElementById('container-9');
let capsicum1 = document.getElementById('container-12');


btn1.addEventListener('click',pizzabase);
function pizzabase(){
    let img = document.getElementById('image');
    img.src = "https://www.allrecipes.com/thmb/OGpyfvmlQWWJ2qQhhaQw7aN03ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20171-quick-and-easy-pizza-crust-step7-228-4x3-31bf7c6ba38b46b2af7dba80cc6730fa.jpg";

}

btn2.addEventListener('click',tomato);
function tomato(){
    let img = document.getElementById('image');
    img.src = "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/homemade-margherita-pizza.jpg";
}
btn4.addEventListener('click',tomato_remove);
function tomato_remove(){
    let img = document.getElementById('image');
    img.src = "https://www.allrecipes.com/thmb/OGpyfvmlQWWJ2qQhhaQw7aN03ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20171-quick-and-easy-pizza-crust-step7-228-4x3-31bf7c6ba38b46b2af7dba80cc6730fa.jpg";

}



let btn5 = document.getElementById('container-5');
let btn7 = document.getElementById('container-7');
btn5.addEventListener('click',cheese);
function cheese(){
    let img = document.getElementById('image');
    img.src = "https://joyfoodsunshine.com/wp-content/uploads/2023/03/how-to-make-pepperoni-pizza-recipe-3-500x500.jpg";
}
btn7.addEventListener('click',cheese_remove);
function cheese_remove(){
    let img = document.getElementById('image');
    img.src = "https://www.allrecipes.com/thmb/OGpyfvmlQWWJ2qQhhaQw7aN03ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20171-quick-and-easy-pizza-crust-step7-228-4x3-31bf7c6ba38b46b2af7dba80cc6730fa.jpg";

}


let btn8 = document.getElementById('container-8');
let btn10 = document.getElementById('container-10');
btn8.addEventListener('click',corn);
function corn(){
    let img = document.getElementById('image');
    img.src = "https://bing.com/th?id=OSK.dac96c15b3a413734adb39b2890812d8";
    
    
}
btn10.addEventListener('click',corn_remove);
function corn_remove(){
    let img = document.getElementById('image');
    img.src = "https://www.allrecipes.com/thmb/OGpyfvmlQWWJ2qQhhaQw7aN03ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20171-quick-and-easy-pizza-crust-step7-228-4x3-31bf7c6ba38b46b2af7dba80cc6730fa.jpg";

}


let btn11 = document.getElementById('container-11');
let btn13 = document.getElementById('container-13');
btn11.addEventListener('click',capsicum);
function capsicum(){
    let img = document.getElementById('image');
    img.src = "https://th.bing.com/th/id/OIP.RRuItmwrZ0Waj2bv5rIJ9AHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain";
}
btn13.addEventListener('click',capsicum_remove);
function capsicum_remove(){
    let img = document.getElementById('image');
    img.src = "https://www.allrecipes.com/thmb/OGpyfvmlQWWJ2qQhhaQw7aN03ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20171-quick-and-easy-pizza-crust-step7-228-4x3-31bf7c6ba38b46b2af7dba80cc6730fa.jpg";

}



tomato1 && cheese1.addEventListener('click',()=>{
        let img = document.getElementById('image');
        img.src = "https://images.eatsmarter.com/sites/default/files/styles/1024x768/public/pizza-with-tomato-and-cheese-537086.jpg";
});

tomato1 && corn1.addEventListener('click',()=>{
        let img = document.getElementById('image');
        img.src = "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https:%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F08%2F594aa3f02d052a0bcaec9fe159472b53218c40e7.jpeg";
});

tomato1 && capsicum1.addEventListener('click',()=>{
        let img = document.getElementById('image');
        img.src = "https://th.bing.com/th/id/OIP.4ow0WdMKOUVaJ7mr_PwgxwHaEz?w=1200&h=778&rs=1&pid=ImgDetMain";     
});


cheese1 && corn1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://1.bp.blogspot.com/-BPd-fsELcy8/YLTwVqMeE8I/AAAAAAAAHr0/oSpOMClppX4ILTqQ_PjWbYEoy6bBd7hPQCLcBGAsYHQ/s16000/SweetCornPizza.jpg";

});

cheese1 && capsicum1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://4.bp.blogspot.com/-YdW84XAZ2Y4/WCd1MqIeXOI/AAAAAAAAFj4/eFoQ2CKJgmc5AHHz3h5a-sZtEUXSzgv-QCEw/s1600/IMG_2271.JPG";

});

corn1 && capsicum1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://img-global.cpcdn.com/recipes/27026a9b07074850/680x482cq70/capsicum-corn-cheese-pizza-recipe-main-photo.jpg";

});

tomato1 && cheese1,corn1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://bing.com/th?id=OSK.06a6d363f30b516e4a2c9d8a8b307c86";

});

tomato1 && corn1 && capsicum1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://chefchoice.com.np/wp-content/uploads/2020/07/Veg_Extravaganz.jpg";

});

tomato1 && cheese1 && capsicum1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://th.bing.com/th/id/R.cf82140cbf4dc285348faf272d139776?rik=rel6hrqPci2TWA&riu=http%3a%2f%2fpizzaparadise.in%2fwp-content%2fuploads%2f2019%2f10%2fTomato-Capsicum-pizza-paradise.jpg&ehk=ruIceKVIeVJRTqmH%2bVs%2b9o4oQN25Zd2HnZKv0PBu25U%3d&risl=&pid=ImgRaw&r=0";

});

cheese1 && corn1 && capsicum1.addEventListener('click',()=>{
    let img = document.getElementById('image');
    img.src = "https://img-global.cpcdn.com/recipes/27026a9b07074850/680x482cq70/capsicum-corn-cheese-pizza-recipe-main-photo.jpg";
});


if((tomato1 && cheese1 && corn1 && capsicum1).clicked()==true){
    btn11.addEventListener('click',()=>{
        let img = document.getElementById('image');
        img.src = "https://i.pinimg.com/736x/d2/21/bb/d221bb890abfb8893a5d44be49e3bbf0--make-a-pizza-veg-pizza.jpg";
    });
}
















