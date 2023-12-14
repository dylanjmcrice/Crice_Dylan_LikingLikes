let btn1 = 9;
let btn2 = 12;
let btn3 = 9

let btnElement1 = document.querySelector("#btn1");
let btnElement2 = document.querySelector("#btn2");
let btnElement3 = document.querySelector("#btn3");

console.log(btnElement)

function add1 () {
    btn1++;
    console.log(btnElement1, btnElement1.innerText);
    btnElement1.innerText = btn1;

}

function add2 () {
    btn2++;
    console.log(btnElement2, btnElement2.innerText);
    btnElement2.innerText = btn2;

}

function add3 () {
    btn3++;
    console.log(btnElement3, btnElement3.innerText);
    btnElement3.innerText = btn3;
}