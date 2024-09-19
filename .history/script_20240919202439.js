let sliderImages = Array.from(document.querySelectorAll('.container-slider img'));
//get the images and put them in an array
let slidesCount = sliderImages.length; //count of img
let currentImgNo = 5;

//some html elements
let slideNumberElement = document.getElementById('slide-number');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');


//create ul element
let paginationElement = document.createElement('ul');
//setting id (#pagination-ul) to it
paginationElement.setAttribute('id', 'pagination-ul');


//creating li based on sildes count
for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i); //seting an attribute

    paginationItem.appendChild(document.createTextNode(i)); //setting content inside li

    paginationElement.appendChild(paginationItem); //appending li to ul
}

//add ul to the page (indicators div)
document.getElementById('indicators').appendChild(paginationElement);

var paginationNewUl = document.getElementById('pagination-ul');
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li')); //creating array for bullets


//functions
function nextSlide() {
    if(currentImgNo)
   currentImgNo++;

}

function prevSlide() {
   currentImgNo--;
}

function checker() {
    //write slide no in the div
    slideNumberElement.textContent = 'Slide #' + (currentImgNo) + ' of ' + slidesCount;

    removeAllActiveClass();

    //put active class in the current img slide
    sliderImages[currentImgNo - 1].classList.add('active');

    //put active class in current pagination item
    paginationNewUl.children[currentImgNo - 1].classList.add('active');

    //check if the slide is first or not to add disable on prev btn
    if (currentImgNo == 1) {
        prevBtn.classList.add('disabled');
    }
    else {
        prevBtn.classList.remove('disabled');

    }
    //check if the slide is last or not to add disable on next btn
    if (currentImgNo == slidesCount) {
        nextBtn.classList.add('disabled');
    }
    else {
        nextBtn.classList.remove('disabled');

    }

}
checker();

function removeAllActiveClass() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });

}


//handling click on btn
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

