var modeButton  = document.getElementById("mode");
var navbar = document.getElementById("navbar");
var imageBox = document.getElementById("imageBox")
var body = document.querySelector("body");
var apertureNav = document.getElementById("apertureNav");
var navTitle = document.getElementById("navTitle");
var navLinks = document.querySelectorAll(".nav-Link");
var titleBox = document.getElementById("titleBox");
var apertureTitle = document.getElementById("apertureTitle");
var aboutMeWrapper = document.querySelector(".aboutMeWrapper");
var aboutMe = document.getElementById("aboutMe");
var aboutMeHeading = document.getElementById("aboutMeHeading");
var aboutMeText = document.getElementById("aboutMeText");

var body = document.querySelector("body");
var firstImage = document.getElementById("firstImage");
var fullPortfolioHeading = document.getElementById("fullPortfolioHeading");

fetch("https://api.pexels.com/v1/collections/o3drrbl",{
  headers: {
    Authorization: "0iFdBpZkqcmaqi9DnMl7TX08NreNOLzduMmVzNWLrmVIzPZ2a4iS5KNn"
  }
})
   .then(resp => {
     return resp.json()
     
   })
   .then(data => {
    
     console.log(data)
     for (var i = 0; i < data.media.length; i++){
        var currentImgSrc = data.media[i].src.original;
        var img = document.createElement("img");
        img.setAttribute("src", currentImgSrc);
        img.classList = "img-fluid mx-5 my-5"
        img.style.cssText = "border-radius: 20px; min-height: 500px;min-width: 600px;"
        
        titleBox.append(img);
     }
     
     

     
   })




//switching between darkmode and lightmode
modeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(modeButton.classList.contains("bi-moon-fill")){ //switch to lightmode
        modeButton.className = "bi bi-sun-fill text-dark";
        body.style.backgroundColor = "white";
      
      
        fullPortfolioHeading.style.color = "black";
        navbar.style.backgroundColor = "white";
        apertureNav.style.filter = "none";
        navTitle.style.color = "black";
        navLinks.forEach(link =>{
            link.style.color = "black";
        })
        titleBox.style.color = "black";
        apertureTitle.style.filter = "none";
        aboutMeWrapper.style.background = "black";
        aboutMe.style.background = "black";
        aboutMeHeading.style.color = "white";
        aboutMeText.style.color = "white";
        
    

    }
    else if(modeButton.classList.contains("bi-sun-fill")){ //switch to darkmode
        modeButton.className = "bi bi-moon-fill text-light";
        body.style.backgroundColor = "black";
        fullPortfolioHeading.style.color = "white";
        navbar.style.backgroundColor = "black";
        apertureNav.style.filter = "invert()";
        navTitle.style.color = "white";
        navLinks.forEach(link =>{
            link.style.color = "white";
        })
        titleBox.style.color = "white";
        apertureTitle.style.filter = "invert()"
        aboutMeWrapper.style.background = "white";
        aboutMe.style.background = "white";
        aboutMeHeading.style.color = "black";
        aboutMeText.style.color = "black";
    

    }
});