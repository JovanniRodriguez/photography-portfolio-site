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
var headshot = document.getElementById("headshot");
var bookNow = document.getElementById("bookNow");
var instagram = document.getElementById("instagram");
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var recentWork = document.getElementById("recentWork");
var recentWorkHeading = document.getElementById("recentWorkHeading");
var buildings = document.getElementById("buildings");
var miata = document.getElementById("miata");
var mustang = document.getElementById("mustang");
var clouds = document.getElementById("clouds");
var waterfall = document.getElementById("waterfall");
var trees = document.getElementById("trees");
var balloonsButton = document.getElementById("balloonsButton");
var sunsetButton = document.getElementById("sunsetButton");
var cowButton = document.getElementById("cowButton");
var graffitiButton = document.getElementById("graffitiButton");
var dudeButton = document.getElementById("dudeButton");
var nyButton = document.getElementById("nyButton");
var subwayButton = document.getElementById("subwayButton");
var flowersButton = document.getElementById("flowersButton");
var modalImg = document.getElementById("modalImg");
var body = document.querySelector("body");
var github = document.getElementById("github");




balloonsButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "balloons.jpg");
    modalImg.style.cssText = "height: 800px; width: 700px;";
    
})

sunsetButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "sunset.jpg");
    modalImg.style.cssText = "height: 800px; width: 700px;";
})

cowButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "cow.jpg");
    modalImg.style.cssText = "height: 700px; width: 700px;";
})

graffitiButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "graffiti.jpg");
    modalImg.style.cssText = "height: 600px; width: 800px;";
})

dudeButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "dude.jpg"); //change width
    modalImg.style.cssText = "height: 700px; width: 800px;";
})

nyButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "ny.jpg");
    modalImg.style.cssText = "height: 700px; width: 700px;";
})

subwayButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "subway.jpg");
    modalImg.style.cssText = "height: 600px; width: 700px;";
})

flowersButton.addEventListener('click', function(e){
    e.preventDefault();
    modalImg.setAttribute("src", "flowers.jpg");
    modalImg.style.cssText = "height: 800px; width: 700px;";
})


//switching between darkmode and lightmode
modeButton.addEventListener('click', function(e){
    e.preventDefault();
    if(modeButton.classList.contains("bi-moon-fill")){ //switch to lightmode
        modeButton.className = "bi bi-sun-fill text-dark";
        body.style.backgroundColor = "white";
        imageBox.style.backgroundColor = "white";
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
        headshot.style.cssText += "border: 5px solid white;"
        bookNow.style.background = "white";
        bookNow.style.color = "black";
        instagram.style.color = "white";
        facebook.style.color = "white";
        twitter.style.color = "white";
        github.style.color = "white";
        
        recentWork.style.background = "white";
        recentWorkHeading.style.color = "black";
        buildings.style.color = "black";
        miata.style.color = "black";
        mustang.style.color = "black";
        clouds.style.color = "black";
        waterfall.style.color = "black";
        trees.style.color = "black";

    }
    else if(modeButton.classList.contains("bi-sun-fill")){ //switch to darkmode
        modeButton.className = "bi bi-moon-fill text-light";
        body.style.backgroundColor = "black";
        imageBox.style.backgroundColor = "black";
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
        headshot.style.cssText -= "border: 5px solid white;"
        bookNow.style.background = "black";
        bookNow.style.color = "white";
        instagram.style.color = "black";
        facebook.style.color = "black";
        twitter.style.color = "black";
        github.style.color = "black";
        recentWork.style.background = "black";
        recentWorkHeading.style.color = "white";
        buildings.style.color = "white";
        miata.style.color = "white";
        mustang.style.color = "white";
        clouds.style.color = "white";
        waterfall.style.color = "white";
        trees.style.color = "white";

    }
});