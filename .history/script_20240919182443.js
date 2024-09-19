let sliderImages =Array.from(document.querySelectorAll('.container-slider img'));
//get the images and put them in an array

let slidesCount=sliderImages.length; //count of img
let currentImgNo = 3;

//some html elements
let slideNumberElement=document.getElementById('slide-number');
let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');


//create ul element
let paginationElement=document.createElement('ul');
//setting id (#pagination-ul) to it
paginationElement.setAttribute('id','pagination-ul');


//creating li based on sildes count
for(let i=1; i<=slidesCount; i++){
let paginationItem =document.createElement('li');
paginationItem.setAttribute('data-index' , i); //seting an attribute

paginationItem.appendChild(document.createTextNode(i)); //setting content inside li

paginationElement.appendChild(paginationItem); //appending li to ul
}

//add ul to the page (indicators div)
document.getElementById('indicators').appendChild(paginationElement);

var paginationNewUl =document.getElementById('pagination-ul');


//functions
function nextSlide(){
    console.log("Next");
}

function prevSlide(){
    console.log("Prev");
}

function checker(){
    //write slide no in the div
    slideNumberElement.textContent='Slide #'+(currentImgNo) + ' of ' + slidesCount;
    
    //put active class in the current img slide
    sliderImages[currentImgNo - 1].classList.add('active');
    
}
checker();


//handling click on btn
nextBtn.onclick=nextSlide;
prevBtn.onclick=prevSlide;

