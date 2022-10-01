// show / hide search input 
let searchButton = document.getElementById("search");
let searchField = document.getElementById("search-bar");
let searchOn = false;


let showSearch = () => {
    searchField.style.visibility = 'visible';
    searchField.style.width = "auto";
};

let hideSearch = () => {
    searchField.style.visibility = 'hidden';
    searchField.style.width = "0%";
}

searchButton.onclick = showSearch;

document.body.ondblclick = hideSearch;

// Promo timer 

let promo = document.getElementById('promo');

setTimeout(function(){
    promo.style.visibility = 'visible';
},  2000);

// Category hover states

let mattressButton = document.getElementById("mattress")
let mattressBanner = document.getElementById("m-head");

let showMattBan = () => {
    mattressBanner.style.visibility = 'visible';
};
let hideMattBan = () => {
    mattressBanner.style.visibility = 'hidden';
};

mattressButton.onmouseenter = showMattBan;
mattressButton.onmouseleave = hideMattBan;

let bedButton = document.getElementById("bed")
let bedBanner = document.getElementById("b-head");

let showBedBan = () => {
    bedBanner.style.visibility = 'visible';
};
let hideBedBan = () => {
    bedBanner.style.visibility = 'hidden';
};

bedButton.onmouseenter = showBedBan;
bedButton.onmouseleave = hideBedBan;

let pillowButton = document.getElementById("pillow")
let pillowBanner = document.getElementById("p-head");

let showPillowBan = () => {
    pillowBanner.style.visibility = 'visible';
};
let hidePillowBan = () => {
    pillowBanner.style.visibility = 'hidden';
};

pillowButton.onmouseenter = showPillowBan;
pillowButton.onmouseleave = hidePillowBan;

let duvetButton = document.getElementById("duvet")
let duvetBanner = document.getElementById("d-head");

let showDuvetBan = () => {
    duvetBanner.style.visibility = 'visible';
};
let hideDuvetBan = () => {
    duvetBanner.style.visibility = 'hidden';
};

duvetButton.onmouseenter = showDuvetBan;
duvetButton.onmouseleave = hideDuvetBan;

let beddingButton = document.getElementById("bedding")
let beddingBanner = document.getElementById("bs-head");

let showBeddingBan = () => {
    beddingBanner.style.visibility = 'visible';
};
let hideBeddingBan = () => {
    beddingBanner.style.visibility = 'hidden';
};

beddingButton.onmouseenter = showBeddingBan;
beddingButton.onmouseleave = hideBeddingBan;

