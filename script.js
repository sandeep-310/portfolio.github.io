//   All varialble declaration part

var Content1 = document.getElementById("Content1");
var Content2 = document.getElementById("Content2");
var Content3 = document.getElementById("Content3");
var Content4 = document.getElementById("Content4");
var buttons = document.querySelectorAll(".navbar ul li a");
var buttonArray = Array.from(buttons);
var HorizontalLine = document.querySelectorAll(".horiLine");
var HorizontalLineArray = Array.from(HorizontalLine);
var navbar = document.querySelector(".navbar");
var Menu = document.querySelector(".menuIcon");
var mediaQueryWidth = window.matchMedia("(max-width: 700px)");



//     Setting font color of after element of home button to #eb4a4a in initial stage

buttonArray[0].style.setProperty("--bg", "rgb(235, 74, 74)");



//    Logic Of Hamburger Icon

Menu.addEventListener("click", () => {
  Menu.firstElementChild.classList.toggle("bar1");
  Menu.childNodes[3].classList.toggle("bar2");
  Menu.lastElementChild.classList.toggle("bar3");
  document.querySelector(".menu").classList.toggle("active");
  if (document.querySelector(".menu").classList[1] == "active") {
    document.querySelector(".menu").style.transform = "translateX(0%)";
  } else if (document.querySelector(".menu").classList[1] == undefined) {
    document.querySelector(".menu").style.transform = "translateX(100%)";
  }
});



//                                COLOR CHANGE OF NAVBAR ON SCROLL

window.addEventListener("scroll", (e) => {
  let scrollValue = window.scrollY;
  if (scrollValue > 36) {
    navbar.classList.add("navbarBG");
  } else {
    navbar.classList.remove("navbarBG");
  }
});



// HOME PAGE ANIMATIONS for PC

function HomePageAnimations() {
  ScrollReveal().reveal(".welcome-div", {
    distance: "20px",
    delay: 200,
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal("#socials", {
    delay: 100,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".twitter", {
    delay: 410,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".linkedin", {
    delay: 810,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".github", {
    delay: 1210,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".instagram", {
    delay: 1610,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".circle-1", {
    delay: 200,
    distance: "40px",
    origin: "right",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".circle-3", {
    delay: 300,
    distance: "40px",
    origin: "left",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".logo", {
    delay: 100,
    distance: "40px",
    origin: "top",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".home-quote h1", {
    delay: 300,
    distance: "40px",
    origin: "right",
    duration: 600,
    easing: "ease",
  });
  ScrollReveal().reveal(".home-quote p", {
    delay: 350,
    distance: "40px",
    origin: "bottom",
    duration: 600,
    easing: "ease",
  });
}



//ANIMATIONS OF ELEMENTS in About Section for PC

function AboutPageAnimation() {
  ScrollReveal().reveal("#introduction h2", {
    distance: "40px",
    origin: "bottom",
    delay: 500,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introduction :nth-child(2)", {
    distance: "40px",
    origin: "bottom",
    delay: 1000,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introLeftPart :nth-child(1)", {
    distance: "40px",
    origin: "bottom",
    delay: 1500,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introRightPart :nth-child(1)", {
    distance: "40px",
    origin: "bottom",
    delay: 1700,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introLeftPart :nth-child(2)", {
    distance: "40px",
    origin: "bottom",
    delay: 1900,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introRightPart :nth-child(2)", {
    distance: "40px",
    origin: "bottom",
    delay: 2100,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introLeftPart :nth-child(3)", {
    distance: "40px",
    origin: "bottom",
    delay: 2300,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introRightPart :nth-child(3)", {
    distance: "40px",
    origin: "bottom",
    delay: 2500,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal("#introDiv :nth-child(4)", {
    distance: "40px",
    origin: "bottom",
    delay: 3000,
    easing: "ease",
    duration: 500,
  });
  ScrollReveal().reveal(".About .sub-section h1", {
    distance: "50px",
    origin: "bottom",
    delay: 400,
    easing: "ease",
  });
  ScrollReveal().reveal(".About .sub-section p", {
    distance: "50px",
    origin: "left",
    delay: 400,
    easing: "ease",
  });
  ScrollReveal().reveal("#html", {
    distance: "50px",
    origin: "bottom",
    delay: 600,
    easing: "ease",
  });
  ScrollReveal().reveal("#js", {
    distance: "50px",
    origin: "bottom",
    delay: 600,
    easing: "ease",
  });
  ScrollReveal().reveal("#css", {
    distance: "50px",
    origin: "bottom",
    delay: 800,
    easing: "ease",
  });
  ScrollReveal().reveal("#react", {
    distance: "50px",
    origin: "bottom",
    delay: 800,
    easing: "ease",
  });
}


// Animations of Elements in Contact Section for PC

function ContactPageAnimation() {
  ScrollReveal().reveal("#subHeadofContact", {
    delay: 1100,
    distance: "80px",
    origin: "left",
    duration: 900,
    easing: "ease",
  });
  ScrollReveal().reveal("#ContactPagePhoto", {
    delay: 1100,
    distance: "80px",
    origin: "right",
    duration: 900,
    easing: "ease",
  });
  ScrollReveal().reveal("#PhoneNo", {
    delay: 2000,
    distance: "20px",
    origin: "bottom",
    duration: 500,
    easing: "ease",
  });
  ScrollReveal().reveal("#Email", {
    delay: 2600,
    distance: "20px",
    origin: "bottom",
    duration: 500,
    easing: "ease",
  });
  ScrollReveal().reveal("#Dm", {
    delay: 3200,
    distance: "20px",
    origin: "bottom",
    duration: 500,
    easing: "ease",
  });
}



// Animations on Phone

function RevealAnimationPhone() {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".scrollRevealonPhone").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 200) {
        element.classList.add("onScrollAnimationforPhone");
        element.classList.remove("scrollRevealonPhone");
      }
    });
  });
}



//                          Common Logic For Home Button

buttonArray[0].addEventListener("click", () => {
  //COLOR CHANGE ON TAB SWITCHING
  document.getElementById("Home-btn").style.color = "#eb4a4a";
  document.getElementById("About-btn").style.color = "#fff";
  document.getElementById("Contact-btn").style.color = "#fff";
  document.getElementById("Projects-btn").style.color = "#fff";

  HorizontalLineArray.forEach((element) => {
    if (element.parentNode.parentNode.parentNode == Content3) {
      element.classList.remove("horiLineAnimation");
    }
  });
  //COLOR CHANGE OF AFTER ELEMENT BETWEEN TAB SWITCHING
  buttonArray.forEach((element) => {
    if (element.style.color == "rgb(235, 74, 74)") {
      element.style.setProperty("--bg", "rgb(235, 74, 74)");
    } else {
      element.style.setProperty("--bg", "rgb(255, 255, 255)");
    }
  });
});



//                               Common Logic For About Button

buttonArray[1].addEventListener("click", () => {
  //COLOR CHANGE ON TAB SWITCHING
  document.getElementById("Home-btn").style.color = "#fff";
  document.getElementById("About-btn").style.color = "#eb4a4a";
  document.getElementById("Contact-btn").style.color = "#fff";
  document.getElementById("Projects-btn").style.color = "#fff";

  HorizontalLineArray.forEach((element) => {
    if (element.parentNode.parentNode.parentNode == Content3) {
      element.classList.remove("horiLineAnimation");
    }
  });

  //COLOR CHANGE OF AFTER ELEMENT BETWEEN TAB SWITCHING
  buttonArray.forEach((element) => {
    if (element.style.color == "rgb(235, 74, 74)") {
      element.style.setProperty("--bg", "rgb(235, 74, 74)");
    } else {
      element.style.setProperty("--bg", "rgb(255, 255, 255)");
    }
  });
});



//                            Common Logic For Contact Button

buttonArray[2].addEventListener("click", () => {
  //COLOR CHANGE ON TAB SWITCHING
  document.getElementById("Home-btn").style.color = "#fff";
  document.getElementById("About-btn").style.color = "#fff";
  document.getElementById("Contact-btn").style.color = "#eb4a4a";
  document.getElementById("Projects-btn").style.color = "#fff";

  HorizontalLineArray.forEach((element) => {
    if (element.parentNode.parentNode.parentNode == Content3) {
      element.classList.add("horiLineAnimation");
    }
  });
  //COLOR CHANGE OF AFTER ELEMENT BETWEEN TAB SWITCHING
  buttonArray.forEach((element) => {
    if (element.style.color == "rgb(235, 74, 74)") {
      element.style.setProperty("--bg", "rgb(235, 74, 74)");
    } else {
      element.style.setProperty("--bg", "rgb(255, 255, 255)");
    }
  });
});



//                      Common Logic For Project Button

buttonArray[3].addEventListener("click", () => {
  //COLOR CHANGE ON TAB SWITCHING
  document.getElementById("Home-btn").style.color = "#fff";
  document.getElementById("About-btn").style.color = "#fff";
  document.getElementById("Contact-btn").style.color = "#fff";
  document.getElementById("Projects-btn").style.color = "#eb4a4a";

  HorizontalLineArray.forEach((element) => {
    if (element.parentNode.parentNode.parentNode == Content3) {
      element.classList.remove("horiLineAnimation");
    }
  });
  //COLOR CHANGE OF AFTER ELEMENT BETWEEN TAB SWITCHING
  buttonArray.forEach((element) => {
    if (element.style.color == "rgb(235, 74, 74)") {
      element.style.setProperty("--bg", "rgb(235, 74, 74)");
    } else {
      element.style.setProperty("--bg", "rgb(255, 255, 255)");
    }
  });
});



//  Specific Button Logics
function mediaQueryfunction(width) {
  // This one for mobile devices
  if (width.matches) {
    buttonArray[0].addEventListener("click", () => {
      document.querySelector(".menu").style.transform = "translateX(100%)";
      Menu.firstElementChild.classList.remove("bar1");
      Menu.childNodes[3].classList.remove("bar2");
      document.querySelector(".menu").classList.remove("active");
      Menu.lastElementChild.classList.remove("bar3");
      window.scrollBy(0, Content1.getBoundingClientRect().top - 60);
      HomePageAnimations();
    });
    buttonArray[1].addEventListener("click", () => {
      document.querySelector(".menu").style.transform = "translateX(100%)";
      Menu.firstElementChild.classList.remove("bar1");
      Menu.childNodes[3].classList.remove("bar2");
      Menu.lastElementChild.classList.remove("bar3");
      document.querySelector(".menu").classList.remove("active");
      window.scrollBy(0, Content2.getBoundingClientRect().top - 60);
      RevealAnimationPhone();
    });
    buttonArray[2].addEventListener("click", () => {
      document.querySelector(".menu").style.transform = "translateX(100%)";
      Menu.firstElementChild.classList.remove("bar1");
      Menu.childNodes[3].classList.remove("bar2");
      Menu.lastElementChild.classList.remove("bar3");
      document.querySelector(".menu").classList.remove("active");
      window.scrollBy(0, Content3.getBoundingClientRect().top - 59);
      RevealAnimationPhone();
    });
    buttonArray[3].addEventListener("click", () => {
      document.querySelector(".menu").style.transform = "translateX(100%)";
      Menu.firstElementChild.classList.remove("bar1");
      Menu.childNodes[3].classList.remove("bar2");
      Menu.lastElementChild.classList.remove("bar3");
      document.querySelector(".menu").classList.remove("active");
      window.scrollBy(0, Content4.getBoundingClientRect().top - 58);
      RevealAnimationPhone();
    });
    HomePageAnimations();
    RevealAnimationPhone();
    //   Menu Buttons color change on scroll
    window.addEventListener("scroll",()=>{
      if (Content1.getBoundingClientRect().top <= 60 && Content2.getBoundingClientRect().top > 60) {
        document.getElementById("Home-btn").style.color = "#eb4a4a";
        document.getElementById("About-btn").style.color = "#fff";
        document.getElementById("Contact-btn").style.color = "#fff";
        document.getElementById("Projects-btn").style.color = "#fff";
      }
      else if (Content2.getBoundingClientRect().top <= 60 && Content3.getBoundingClientRect().top > 60) {
        document.getElementById("Home-btn").style.color = "#fff";
        document.getElementById("About-btn").style.color = "#eb4a4a";
        document.getElementById("Contact-btn").style.color = "#fff";
        document.getElementById("Projects-btn").style.color = "#fff";
      }
      else if (Content3.getBoundingClientRect().top <= 60 && Content4.getBoundingClientRect().top > 60) {
        document.getElementById("Home-btn").style.color = "#fff";
        document.getElementById("About-btn").style.color = "#fff";
        document.getElementById("Contact-btn").style.color = "#eb4a4a";
        document.getElementById("Projects-btn").style.color = "#fff";
      }
      else if (Content4.getBoundingClientRect().top <= 60) {
        document.getElementById("Home-btn").style.color = "#fff";
        document.getElementById("About-btn").style.color = "#fff";
        document.getElementById("Contact-btn").style.color = "#fff";
        document.getElementById("Projects-btn").style.color = "#eb4a4a";
      }
    })
  }


  //This one for pc devices
  else {
    //Logic For Home Button
    buttonArray[0].addEventListener("click", () => {
      //  TAB SWITCHUNG ANIMATIONS
      Content1.style.transform = "translateX(0)";
      Content2.style.transform = "translateX(150%)";
      Content3.style.transform = "translateX(-150%)";
      Content4.style.transform = "translateX(150%)";

      document.body.classList.remove("overflow");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    HomePageAnimations();

    //Logic For About Button
    buttonArray[1].addEventListener("click", () => {
      //  TAB SWITCHUNG ANIMATIONS
      Content1.style.transform = "translateX(-150%)";
      Content2.style.transform = "translateX(0)";
      Content3.style.transform = "translateX(-150%)";
      Content4.style.transform = "translateX(150%)";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.classList.add("overflow");
      AboutPageAnimation();
    });

    //Logic For Contact Button
    buttonArray[2].addEventListener("click", () => {
      //  TAB SWITCHUNG ANIMATIONS
      Content1.style.transform = "translateX(-150%)";
      Content2.style.transform = "translateX(150%)";
      Content3.style.transform = "translateX(0)";
      Content4.style.transform = "translateX(150%)";
      document.body.classList.remove("overflow");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      ContactPageAnimation();
    });

    //Logic For Project Button
    buttonArray[3].addEventListener("click", () => {
      //  TAB SWITCHUNG ANIMATIONS
      Content1.style.transform = "translateX(-150%)";
      Content2.style.transform = "translateX(150%)";
      Content3.style.transform = "translateX(-150%)";
      Content4.style.transform = "translateX(0)";
      document.body.classList.remove("overflow");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    document.querySelectorAll(".scrollRevealonPhone").forEach((element) => {
        element.classList.remove("scrollRevealonPhone");
    });
  }
}

// Media Query in Js

mediaQueryfunction(mediaQueryWidth);

mediaQueryWidth.addEventListener("change", function () {
  mediaQueryfunction(mediaQueryWidth);
});
