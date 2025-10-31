// 1. Modul fs - File System

// import module fs
const fs = require("fs");

// membaca file

// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error membaca file:", err.message);
//     return;
//   }
//   console.log("Isi file:");
//   console.log(data);
// });


// menulis file
// fs.writeFile("./output.txt", "Ini isi file baru", (err) => {
//   if (err) throw err;
//   console.log("File berhasil ditulis!");
// });


// menambahkan konten ke file
// fs.appendFile('./output.txt','\nBaris tambahan',(err) => {
//   if (err) throw err;
//   console.log('Konten berhasil ditambahkan!')
// })


// mengecek file ada atau tidak
// const exist = fs.existsSync('./output.txt')
// console.log('Apakah file ada?', exist)



// 2. Modul path - Mengelola Path
// const path = require('path')

// console.log(path.basename(__filename)) // nama file saat ini
// console.log(path.dirname(__filename)) // direktori file
// console.log(path.extname(__filename)) // ekstensi file
// console.log(path.join(__dirname, "data", "file.txt")) // gabung path



// 3. Modul os - Informasi Sistem Operasi
const os = require('os');

console.log('OS Platform:', os.platform()) 
console.log('Tipe OS:' ,os.type())
console.log('Total Memory:', os.totalmem())
console.log('Free Memory:', os.freemem())
console.log('Home Dir:', os.homedir())