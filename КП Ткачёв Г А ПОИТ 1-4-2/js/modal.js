let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");

let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");

let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}


span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}