//array

let nilai =[90,80,55,30,75];

for(let i=0; i <nilai.length; i++){
    console.log("nilai=", nilai[i]+)
}
console.log(nilai);

//nilai[2] =90;
//console.log(nilai.lenght - 1);

let jhon = ["jhon", "doe", 33, true];

console.log(jhon.length - 1);
console.log(jhon);

//tostring()
console.log(jhon.toString());

//join()
console.log(jhon.join(" - "));

//pop()
jhon.pop();
console.log(jhon.join(" - "));

//push()
jhon.push(true);
jhon.push("hello");
console.log(jhon.join(" - "));

//shift()
jhon.shift();
console.log(jhon.join(" - "));

//unshift()
jhon.unshift("jhon");
console.log(jhon.join(" - "));

//splice()
let buah=["anggur", "apel", "mangga", "semangka"];
buah.splice(2,0,"jeruk","kiwi");
console.log(buah.join(" - "));

//concat()
let buah=["pisang","jeruk","pepaya"];
let sayur=["kangkung", "wortel", "brokoli"];
let biji=["kacang kedelai", "kacang tanah", "kacang polong"];

let makanan= buah.concat(sayur,biji);
console.log(makanan.join(" - "));

//slice()
let cemilan=["martabak", "gorengan", "puding","permen"];
let cemilanGurih= cemilan.slice(0,3);
let cemilanManis= cemilan.slice(3);

console.log(cemilanGurih.join(" - "));
console.log(cemilanManis.join(" - "));

//sort
let buah=["mangga","anggur","kelapa","nanas"];
buah.sort();
console.log(buah.join(" - "));

let bilangan=[10,4,82,5,68,17,890];
let UrutDariTerkecil= function(a,b){
    return a-b;
};
let UrutDariTerbesar= function(a,b){
    return b-a;
};

console.log(bilangan.sort(UrutDariTerkecil));
console.log(bilangan.sort(UrutDariTerbesar));

//reverse()
let buah=["apel","jeruk","nangka","langsa"];
buah.reverse();
console.log(buah);
let buah=["apel","jeruk","nangka","langsa"];
buah.sort().reverse();
console.log(buah);

