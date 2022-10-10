// Product page

let detailButton = document.getElementById("h-details");
let detailContent = document.getElementById("c-details");
let reviewButton = document.getElementById("h-reviews");
let reviewContent = document.getElementById("c-reviews");

let reviewClick = () => {
    detailButton.style.color = '#466365';
    detailButton.style.backgroundColor = "whitesmoke";
    reviewButton.style.color = 'whitesmoke';
    reviewButton.style.backgroundColor = '#466365';
    detailContent.style.display = 'none';
    reviewContent.style.display = 'block';

} 

reviewButton.onclick = reviewClick;

let detailClick = () => {
    reviewButton.style.color = '#466365';
    reviewButton.style.backgroundColor = "whitesmoke";
    detailButton.style.color = 'whitesmoke';
    detailButton.style.backgroundColor = '#466365';
    reviewContent.style.display = 'none';
    detailContent.style.display = 'block';

} 

detailButton.onclick = detailClick;