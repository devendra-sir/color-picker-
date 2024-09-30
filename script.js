const div = document.getElementById('main')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const heading2 = document.getElementById('heading2')

let i = 0
btn1.addEventListener("click", function() {   
    if (i == 0) {
        div.style.backgroundColor = "red";
        heading2.innerHTML = "BACKGROUND COLOR : RED";
        i = 1;
    } else {
        div.style.backgroundColor = "red";
        heading2.innerHTML = "BACKGROUND COLOR : RED";
        i = 0;
    }
});

let j = 0
btn4.addEventListener("click", function() {   
    if (j == 0) {
        div.style.backgroundColor = "green";
        heading2.innerHTML = "BACKGROUND COLOR : GREEN";
        j = 1;
    } else {
        div.style.backgroundColor = "GREEN";
        heading2.innerHTML = "BACKGROUND COLOR : GREEN";
        j = 0;
    }
});

let k = 0
btn2.addEventListener("click", function() {   
    if (k == 0) {
        div.style.backgroundColor = "pink";
        heading2.innerHTML = "BACKGROUND COLOR : PINK";
        k = 1;
    } else {
        div.style.backgroundColor = "PINK";
        heading2.innerHTML = "BACKGROUND COLOR : PINK";
        k = 0;
    }
});

let l = 0
btn3.addEventListener("click", function() {   
    if (l == 0) {
        div.style.backgroundColor = "blue";
        heading2.innerHTML = "BACKGROUND COLOR : BLUE";
        l = 1;
    } else {
        div.style.backgroundColor = "BLUE";
        heading2.innerHTML = "BACKGROUND COLOR : BLUE";
        l = 0;
    }
});