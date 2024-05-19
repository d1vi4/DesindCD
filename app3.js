// function quis() {
//     let a = 0
//     let b = prompt("BU STUKTUR QURMAQ UCUNDUR")
//     let c = prompt("BU DIZAYN QURMAQ UCUNDUR")
//     let d = prompt("BU FUNKSIYA QURMAQ UCUNDUR")
//     if(b=="html"){
//         a++
//     }if(c=="css") {
//         a++
//     }if(d=="js"){
//         a++
//     }if(a==0){
//         document.querySelector("body").style.backgroundColor = "red"
//     }else if(a==1){
//         document.querySelector("body").style.backgroundColor = "yellow"
//     }else if(a==2){
//         document.querySelector("body").style.backgroundColor = "blue"
//     }else{
//         document.querySelector("body").style.backgroundColor = "green"
//     }
//     return document.querySelector("h1").innerText = `DUZGUN CAVABLARIN SAYI : ${a}`
// }
// let a = document.querySelector("p")

// a.forEach(p => {
//     p.innerText = "Hello World"
// });

// let a = prompt('');

// let b = prompt('');

// let c = prompt('');

// let body = document.querySelector('body');

// let as = document.createElement('p');

// as.innerText=a;
// let ee = document.createElement('p');

// ee.innerText=b;
// let fs = document.createElement('p');

// fs.innerText = c;

// body.append(as);
// body.append(ee);
// body.append(fs);

// let aa = document.querySelector(".one");
// let bb = document.querySelector(".two");
// let cc = document.querySelector(".three");
// let dd = document.querySelector(".four");

// let a;
// let b;
// let c;
// let d;

// function ab() {
//     let a = prompt("width")
//     let b = prompt("height")
//     let c = prompt("reng")
//     let d = prompt("yazi")

//     aa.innerText = a
//     bb.innerText = b
//     cc.innerText = c
//     dd.innerText = d
// }

// function aaa() {
//     let body = document.querySelector("body");
//     let div = document.createElement("div");
//     div.style.width = a
//     div.style.height = b
//     div.style.backgroundColor = c
//     div.innerText = d
//     body.append(div)
// }


// let c = document.querySelector("ul")

// function one() {
//     let a = document.querySelector("#raul").value
//     let b = document.createElement("li")
//     b.innerText = a
//     c.prepend(b)
// }
// function two() {
//     c.removeChild(c.lastElementChild)
// }


// function one() {
//     let a = document.getElementById("raul").value
//     let b = document.getElementById("elxan").value
//     let c = document.getElementById("yasin").value
//     document.querySelector("img").src = c
//     document.querySelector("#tr").innerText = b
//     document.querySelector("#az").innerText = a
// }

function fin() {
    let a = document.getElementById("width").value ;
    let b = document.getElementById("height").value ;
    let c = document.getElementById("BackgroundColor").value ;
    let d = document.getElementById("Border").value ;
    let e = document.getElementById("scale").value ;
    let f = document.getElementById("rotate").value ;
    let em = document.getElementById("radius").value ;

    let ofall = document.getElementById("no")
    ofall.style.width = a ;
    ofall.style.height = b ;
    ofall.style.backgroundColor = c ;
    ofall.style.border = d ;
    ofall.style.scale = e ;
    ofall.style.rotate = f ;
    ofall.style.borderRadius = em ;
}