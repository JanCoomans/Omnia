window.addEventListener("load", handleLoad);


function handleLoad() {// Zet alle events hierin, en maak apparte functies.
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);
}

function toggleSearchBar() {
    let item = document.getElementById("header-search-input");
    item.style.display = ( item.style.display ===  "unset" ? "none" : "unset");
}

