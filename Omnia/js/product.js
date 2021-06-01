window.addEventListener('load', loadHandler);

function loadHandler(){
    document.getElementsByClassName("pre-order").addEventListener("click", preOrder);
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
