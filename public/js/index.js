let navbtn=document.getElementById("nav-btn");
let logo=document.getElementById("logo");
let bannerSearch=document.getElementById("bannersearch");
let searchBtn=document.getElementById("searchbtn");
let searchField=document.getElementById("searchField");

//For hiding logo and search button from Navbar Menu

console.log(window.innerHeight);
navbtn.addEventListener("click",()=>{
    logo.classList.toggle('inactive');
    searchBtn.classList.toggle('inactive');
    
})
//For active Search field 
let showcase=document.getElementById("showCase");
console.log(showcase.getBoundingClientRect().top);
console.log(window.innerHeight);
searchBtn.addEventListener("click",()=>{
    topView=showcase.getBoundingClientRect().top;
    console.log(topView);
    if(topView<-132)
    {

    searchField.classList.toggle('onactive');
    navbtn.style="opacity:0.5";
    }
    else{
         bannerSearch.focus();
    }
})

