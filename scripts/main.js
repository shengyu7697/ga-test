// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// button event

let myButton1 = document.getElementById('btn1');
let myButton2 = document.getElementById('btn2');
let myButton3 = document.getElementById('btn3');

myButton1.onclick = function() {
  console.log("Button1 click");
  gtag('event', '按鈕點擊', {
    'event_category': '一般',
    'event_label': 'btn 1'
  });
}

myButton2.onclick = function() {
  console.log("Button2 click");
  gtag('event', '按鈕點擊', {
    'event_category': '一般',
    'event_label': 'btn 2'
  });
}

myButton3.onclick = function() {
  console.log("Button3 click");
  gtag('event', '按鈕點擊', {
    'event_category': '一般',
    'event_label': 'btn 3'
  });
}

function button4OnClick() {
  console.log("Button4 click");
  gtag('event', '按鈕點擊', {
    'event_category': '一般',
    'event_label': 'btn 4'
  });
}
