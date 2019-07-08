const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelectorAll("nav a");
header[0].textContent = siteContent["nav"]["nav-item-1"];
header[1].textContent = siteContent["nav"]["nav-item-2"];
header[2].textContent = siteContent["nav"]["nav-item-3"];
header[3].textContent = siteContent["nav"]["nav-item-4"];
header[4].textContent = siteContent["nav"]["nav-item-5"];
header[5].textContent = siteContent["nav"]["nav-item-6"];

const headerAdded = document.createElement("a");
console.log(headerAdded)
headerAdded.textContent = "Blog";
headerAdded.style.color = "red";
const headerNav = document.querySelector("nav")
console.log(headerNav)
headerNav.appendChild(headerAdded);

const tagline = document.querySelector(".cta-text");
tagline.textContent = siteContent["cta"]["h1"]

// const button = document.createElement("button");
// console.log(button);
// button.textContent = "Get Started";
// button.className = "cta-text button";


let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

const title = document.querySelectorAll("h4");
title[0].textContent = siteContent["main-content"]["features-h4"];
title[1].textContent = siteContent["main-content"]["about-h4"];
title[2].textContent = siteContent["main-content"]["services-h4"];
title[3].textContent = siteContent["main-content"]["product-h4"];
title[4].textContent = siteContent["main-content"]["vision-h4"];
title[5].textContent = siteContent["contact"]["contact-h4"];

const text = document.querySelectorAll("p");
text[0].textContent = siteContent["main-content"]["features-content"];
text[1].textContent = siteContent["main-content"]["about-content"];
text[2].textContent = siteContent["main-content"]["services-content"];
text[3].textContent = siteContent["main-content"]["product-content"];
text[4].textContent = siteContent["main-content"]["vision-content"];
text[5].textContent = siteContent["contact"]["address"];
text[6].textContent = siteContent["contact"]["phone"];
text[7].textContent = siteContent["contact"]["email"];

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

