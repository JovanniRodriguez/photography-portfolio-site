var modeButton  = document.getElementById("mode");
var navbar = document.getElementById("navbar");
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
var contactMeText = document.querySelector(".nameText");
var instagram = document.getElementById("instagram");
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var formbox = document.querySelector(".formBox");
var nameLabel = document.getElementById("nameLabel");
var emailLabel = document.getElementById("emailLabel");
var questionLabel = document.getElementById("questionLabel");
var submitButton = document.getElementById("submitButton");
var nameField = document.getElementById("name");
var emailField = document.getElementById("emailAddress");
var questionField = document.getElementById("question");
var submitStatus = document.getElementById("submitStatus");



submitButton.addEventListener('click', function(e){
    e.preventDefault();
    if((nameField.value != "") && (emailField.value != "")){
        if(emailField.value.contains("@")){
            submitStatus.textContent = "Submitted!";
        }
        else{
            submitStatus.textContent = "Please enter the required information.";
        }
   
    }
    else{
        submitStatus.textContent = "Please enter the required information.";
    }
})

//switching between darkmode and lightmode
modeButton.addEventListener('click', function(e){
    e.preventDefault();
    
    if(modeButton.classList.contains("bi-moon-fill")){ //switch to lightmode
        modeButton.className = "bi bi-sun-fill text-dark";
        body.style.backgroundColor = "white";
        navbar.style.backgroundColor = "white";
        apertureNav.style.filter = "none";
        navTitle.style.color = "black";
        navLinks.forEach(link =>{
            link.style.color = "black";
        })
        contactMeText.style.color = "black";
        formbox.style.borderColor = "black";
        nameLabel.style.color = "black";
        emailLabel.style.color = "black";
        questionLabel.style.color = "black";
        nameField.style.backgroundColor = "black";
        nameField.style.color = "white";
        emailField.style.backgroundColor = "black";
        emailField.style.color = "white";
        questionField.style.backgroundColor = "black";
        questionField.style.color = "white";
        submitButton.style.backgroundColor = "black";
        submitButton.style.color = "white";
        submitStatus.style.color = "black";

    }
    else if(modeButton.classList.contains("bi-sun-fill")){ //switch to darkmode
        modeButton.className = "bi bi-moon-fill text-light";
        body.style.backgroundColor = "black";
        navbar.style.backgroundColor = "black";
        apertureNav.style.filter = "invert()";
        navTitle.style.color = "white";
        navLinks.forEach(link =>{
            link.style.color = "white";
        })
        contactMeText.style.color = "white";
        formbox.style.borderColor = "white";
        nameLabel.style.color = "white";
        emailLabel.style.color = "white";
        questionLabel.style.color = "white";
        nameField.style.backgroundColor = "white";
        nameField.style.color = "black";
        emailField.style.backgroundColor = "white";
        emailField.style.color = "black";
        questionField.style.backgroundColor = "white";
        questionField.style.color = "black";
        submitButton.style.backgroundColor = "white";
        submitButton.style.color = "black";
        submitStatus.style.color = "white";

    }
});