// TIPE DATA PRIMITIF
// 1. NUMBER = BILANGAN BULAT / DESIMAL
// 2. BOOLEAN = TRUE/FALSE
// 3. STRING = TEXT => HURUF/ANGKA/SIMBOL
// 4. UNDEFINED = BELUM ADA NILAI
// 5. NULL = KOSONG

// TIPE DATA NON-PRIMITIVE
// 6. ARRAY = SEKUMPULAN DATA DINAMAI INDEKS
// 7. OBJECT = SEKUMPULAN DATA DINAMAI PROPERTI
// 8. DATE = WAKTU

var name = "ilham fathullah"
var myAge = age = 23
var isMarried = true

console.log(`myAge : ${myAge}, age : ${age}`)
console.log("Hello, my name is " + name + " my age is " + myAge);
console.log('Hello, my name is ' + name + ' my age is ' + myAge);
console.log(`Hello, my name is ${name} my age is ${myAge}`);

// VARIABEL = WADAH MENYIMPAN DATA
// VAR, LET, CONST

let name = "ilham fathullah"
console.log(`Name : ${name}`);

name = "Deny"
console.log(`Name : ${name}`);


// CONDITION / PERCABANGAN
// menjalankan potongan code berdasarkan kondisi tertentu
let myAge = 20
if (myAge > 50) {
    console.log(`Umurmu wis ${myAge}, wes lansia`);
} else if (myAge > 20) {
    console.log(`Umur mu ${myAge}, wis tuwir`);
} else {
    console.log(`Masih dibawah umur, soale umurmu ${myAge}`);
}

// FUNCTION
// menjalan potongan code secara berulan tanpa menuliskannya lagi
let myName = "Arie"
function greeting(name, age = 0) {
    // let name = "ilham fathullah"
    console.log(`Hello, ${name} your age ${age}`);
}

greeting("ilham")
greeting(myName, 22)
