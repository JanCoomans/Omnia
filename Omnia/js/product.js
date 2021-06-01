window.addEventListener('load', loadHandler);

function loadHandler(){
    let buyButtons = document.getElementsByClassName("pre-order");
    for (let i = 0; i < buyButtons.length; i++){
        buyButtons[i].addEventListener("click", preOrder);
    }
    //order.forEach(element => {element.addEventListener("click", preOrder);})
}

function preOrder(){
    checkCartItems()
    // Redirect
}

function checkCartItems(){
    let shoppingNumber = localStorage.getItem("shoppingCart");
    if (shoppingNumber > 0){
        shoppingNumber++
    }
    else{
        shoppingNumber = 1;
    }
    localStorage.setItem("shoppingCart", shoppingNumber);
}
