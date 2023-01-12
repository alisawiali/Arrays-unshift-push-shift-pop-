/*
-- Arrays Methods [Adding Removing]
-- unshift ("" ,"") Add Elememt To the first
-- push ("","") Add Element to the end 
-- shift () Remove First Element Form Array
-- pop () Remove Last Element Form Array 

*/

let myfrinds = ["Alisawi", "Ali", "Omer", "Imad"];
console.log(myfrinds);

myfrinds.unshift("Imad", "Alaa"); // Arrays Methods [Adding Removing]
console.log(myfrinds);

myfrinds.push("Imad", "Alaa"); //-- push ("","") Add Element to the end
console.log(myfrinds);

let first = myfrinds.shift("Imad"); //-- shift () Remove First Element Form Array
console.log(myfrinds);
console.log(`first Name is ${first}`); // hier wurde gelöscht und denn gefügt

console.log(myfrinds);
let lastNmae = myfrinds.pop("Alaa");
console.log(`last Name is ${lastNmae}`); //-- pop () Remove Last Element Form Array

console.log("-----------------------------------------------------")



/*
Arrays Methods
-- Indexof (Search, From index [Opt]);
-- lastIndexOf(Search Element, From index [Opt])
-- includes( valueToFind ,formIndex [Opt] ) 
 */


let freunde = ["Adel","Imad", "Ahemd","Gmal","Adel","Gmal","Imad","Alaa"]


console.log(freunde.indexOf("Imad")); // index => 0 search die name des Platzt am anfang
console.log(freunde.indexOf("Imad",2)); // index  => 4
console.log(freunde.lastIndexOf("Adel", -3)); //index => 2  müssen wir - minus geben aber er fängt von anfang mit zahl an
console.log(freunde.lastIndexOf("Ahemd", -3));// index =>  4 
console.log(freunde.includes("Imad")); //treu
console.log(freunde.includes("Omer"));// false


if(freunde.indexOf("Imad") === 2){
    console.log("hallo welt");
}else if(freunde.lastIndexOf("Imad") === 6){
    console.log("ich bin hier");
}else if(freunde.includes("Imad")){
    console.log(`i´m happy ${freunde} , dass ihr hier seit`)
}

console.log("------------Arrays methods---------------");

let zNmae = ["Ahmed", 100, 20, "Imad", "Omer", 10, -2];

console.log(zNmae);
console.log(zNmae.sort().reverse()); // sortiert ganz sapuer
console.log(zNmae.reverse().sort())