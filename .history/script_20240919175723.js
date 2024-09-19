let sliderImages =Array.from(document.querySelectorAll('.container-slider img'));
//get the images and put them in an array

let slidesCount=sliderImages.length; //count of img

let currentImg = 1;

//some html elements
let slideNumber=document.getElementById('slide-number');
let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');

//create ul element
var paginationElement=document.createElement('ul');
//setting id (#pagination-ul) to it
paginationElement.setAttribute('id','pagination-ul');

//creating li based on sildes count
for(let i=0; i<slidesCount; i++){
let paginationItem =document.createElement('li');

}



//functions
function nextSlide(){
    console.log("Next");
}

function prevSlide(){
    console.log("Prev");
}


//handling click on btn
nextBtn.onclick=nextSlide;
prevBtn.onclick=prevSlide;

