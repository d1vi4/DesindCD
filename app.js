// for (let index = 0; index < 50; index++){
//     if (index==30){
//         break
//     }
//     console.log(index)
// }

//////////////////////////////////////////////////////FIRST//////////////////////////////////////////////////////


// for (let index = 50; index < 100; index++) {
//     if (index%3==0 && index%5==0) {
//         console.log(index);
//     }
// }



// 50-100 ədədləri aralığında eyni anda 3-ə və 5-ə qalıqsız bölünən ədədləri consola çıxaran proqram qururuq.



//////////////////////////////////////////////////////SECOND/////////////////////////////////////////////////////

// for (let index = 100; index = 0; index--) {
//     console.log(index);
// }


// let a = +prompt("1-100").split()

// try {
//     if (a.length<1) {
//         throw new error ("OLMAZ")
//     }
//     if (a<1) {
//         throw new error ("OLMAZ")
//     }
//     if (a>100) {
//         throw new error ("OLMAZ")
//     }
// }

// catch (error) {
//     console.log(error.message);
// }

// let b = prompt("cumle")

// try {
//     let find = b.find((n)=>n=="_")
//     if(!find) {
//         throw new error ("OLMAZ")
//     }
// }


// let obj = {
//     userName:'Elxan',
//     userSurname:'Merdiyev',
// }
// obj.userName ='Raul'
// obj.ata = 'Azad'
// delete obj.ata

// let person = {

// }

// function raul(a) {
//     a.userName = document.getElementById('name').value
//     a.userSurname = document.getElementById('surname').value
//     a.userAge = document.getElementById('yas').value
//     a.userDate = document.getElementById('dogum').value
//     console.log(a)
// }
//////////////////////////////////////////THIRD////////////////////////////////
// const obj ={
//     ad:"elxan",
//     soyad:"merdiyev",
//     yas:12,
//     calcage:function(n) {
//         return `salam ${this.ad} sizin pensiyaya cixmaniza ${65-this.yas}`
//     }
// }


// const obj ={
//     ad:"elxan",
//     soyad:"merdiyev",
//     yas:12,
//     Specialty:"telebe",
//     salam:function(n) {
//         return `menim adim ${this.ad} ${this.soyad} menim ${this.yas} yasiniz var ve men${this.Specialty}`
//        }
// }




// let arr = [];

// const Obj = function(username, usersurname, userid) {
//     this.username = username,
//     this.usersurname = usersurname,
//     this.userid = userid
// }

// function addUser() {
//     const username = document.getElementById("username").value
//     const usersurname = document.getElementById("surname").value 

//     const userExits = arr.find((user)=> user.usersurname == usersurname);

//     if (!userExits) {
//         const user = new Obj (username,usersurname,arr.length+1)
//         arr.push(user)
//         console.log("Qeydiyyat Ugurludur:", user);
//     } else {
//         console.log("BELE SOYAD VAR")
//     }
//     console.log('user list:',  arr)
// }



// const team = function (team,players) {
//     this.team=team
//     this.players=players
// } 

// team.prototype.reverse = function() {
//     return this.players - 11
// }

// const Barcelona = new team ("Barselona", 23)
// const RealMadrid = new team ("Real Madrid", 21)
// const RaulClub = new team ("RaulClub", 425)

// console.log(Barcelona.reverse())
// console.log(RealMadrid.reverse())
// console.log(RaulClub.reverse())

// class student{
//     constructor(ad,soyad,age,gender){
//         this.ad=ad,
//         this.soyad=soyad,
//         this.age=age,
//         this.gender=gender
//     }
// }

// const elxan = new student ("Elxan", "Merdiyev", 13,"Kisi")
// const raul = new student ("Raul", "Hasanov", 12,"Kisi")
// const yasin = new student ("Yasin", "Memmedli", 11,"Kisi")
// console.log(elxan)

// class student{
//     constructor(ad,soyad,age){
//         this.ad=ad;
//         this.soyad=soyad;
//         this.age=age
//     }
//     plus(){
//         return ++this.age
//     }
// }

// const elxan = new student ("Elxan", "Merdiyev", 13)
// console.log(elxan.plus())



// class phones{
//     constructor(name,color,price){
//         this.name=name;                               
//         this.color=color;
//         this.price=price;
//     }
//     calc(){
//         return this.price - 15;
//     }
// }

// class endirim extends phones{
//     constructor(name,color,price,id){
//         super(name,color,price)
//         this.id=id
//     }
// }

// const IPHONE13PRO = new endirim ("IPHONE13PRO", "qara", 2499, "a52vjxd57cd6y")
// console.log(IPHONE13PRO.calc());

//////////////////////////////////////////////////////////////////////////////////////////////////////

// function phones(name,color,price) {
//             this.name=name;
//             this.color=color;
//             this.price=price;

//             this.calc() = function(){
//                 return this.price - 15;
//             }
// }

// function endirim (name,color,price,id) {
//         super(name,color,price)
//         this.id=id
// }  

// const IPHONE13PRO = new endirim ("IPHONE13PRO", "qara", "2499", "a52vjxd57cd6y")
// console.log(IPHONE13PRO.calc());





// let books = [];
// class book {  
//     constructor(name,Qiymet,Muellifi,Movzu){
//         this.name = name;
//         this.Qiymet=Qiymet;
//         this.Muellifi = Muellifi;
//         this.Movzu = Movzu;
//     }
// }
// function addBook() { 
//     let name = document.getElementById('name').value;
//     let Qiymet = document.getElementById('Qiymet').value;
//     let Muellifi = document.getElementById('Muellifi').value;
//     let Movzu = document.getElementById('Movzu').value;
// try {
//     if (name!=""&&Qiymet!=""&&Muellifi!=""&&Movzu!="") {
//         const Book = new book (name,Qiymet,Muellifi);
//         books.push(Book);
//         name = document.getElementById('name').value = "";
//         Qiymet = document.getElementById('Qiymet').value = "";
//         Muellifi = document.getElementById('Muellifi').value = "";
//         Movzu = document.getElementById('Movzu').value = "";

//          return console.log(books);
//     }
//     else {
//         throw new Error ('Xana Bosdur')
//     }
// } catch (error) {
//     alert(error)
// }


// } 

// function countColor(Muellifi) {
// let count = 0;
// books.forEach (element => {
//     if (element.Muellifi ==Muellifi) {
//         count++;
//     } 
// })
// console.log(count);
// }



// let img = document.querySelector("img")
// let p = document.querySelector("p")
// function a() {
//     img.src = './kitab.jpg'
//     p.innerText = 'KITAB'
// }
// function b() {
//     img.src = './turqan.png'
//     p.innerText = 'ayaqqabi'
// }



///////////PROJETC/////////////



// function form() {
//     let a = document.getElementById("name").value
//     return document.getElementById("uss").innerText = a
// }



function form1(){
    let a = document.getElementById("name").value;
    let b = document.getElementById("pass").value;
    let c = document.getElementById("subpass").value;
    let d = document.getElementById("mail").value;
    if(a==""||b==""||c==""||d==""||b!==c){
        alert("False")
    } else{
        window.location.href = "./index2.html";
    }

}