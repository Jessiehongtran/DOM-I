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

const headerEl = document.querySelector('header');
headerEl;
const subHeadline = document.createElement('h1');
subHeadline;
subHeadline.textContent = "That is going to change the world!"
headerEl.appendChild(subHeadline);

const navtext = document.querySelector('nav a');
const text1 = document.createElement('a');
text1.textContent = siteContent["nav"]["nav-item-1"];
navtext.appendChild(text1);

const text2 = document.createElement('a');
text2.textContent = siteContent["nav"]["nav-item-2"];
navtext.appendChild(text2);

const text3 = document.createElement('a');
text3.textContent = siteContent["nav"]["nav-item-3"];
navtext.appendChild(text3);

const text4 = document.createElement('a');
text4.textContent = siteContent["nav"]["nav-item-4"];
navtext.appendChild(text4);

const text5 = document.createElement('a');
text5.textContent = siteContent["nav"]["nav-item-5"];
navtext.appendChild(text5);

const text6 = document.createElement('a');
text6.textContent = siteContent["nav"]["nav-item-6"];
navtext.appendChild(text6);

const buttontext = document.querySelector('button');
buttontext.textContent = "Get Started";

const topimg = document.getElementById("cta-img");
topimg.setAttribute('src', siteContent["cta"]["img-src"])


//const toptext = document.getElementsByClassName(['top-content']['text-content']);
const featureh4 = document.querySelector('h4');
featureh4.textContent = siteContent["main-content"]["features-h4"];

const featureContent = document.querySelector('p');
featureContent.textContent = siteContent["main-content"]["features-content"];

