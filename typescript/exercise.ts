// Soal 1 "Mencari Luas Persegi Panjang"

let _length: number = 3;
let _width: number = 5;

const broad: number = _length *  _width;
console.log(`Luas persegi panjang adalah ${broad}`);

// Soal 2 "Keliling Persegi Panjang"

let length2: number = 3;
let width2: number = 5;
const around: number = 2 * (length2 + width2);
console.log(`Keliling persegi panjang adalah ${around}`);

// Soal 3

// a "Diameter Lingkaran" Rumus(2 * radius)
let radius: number = 5;
const diameter: number = 2 * radius;
console.log(`Diameter lingkaran adalah ${diameter}`);

// b "Keliling Lingkaran" Rumus(2PI_radius)
const pi: number = Math.PI;
const circumference: number = pi * diameter;
console.log(`Keliling lingkaran adalah ${circumference.toFixed(4)}`);

// c "Luas lingkaran" Rumus(PI * radius(2))
// const _area: number = pi * Math.pow(_radius, 2);
const area: number = pi * (radius * radius);
console.log(area)
console.log(`Luas lingkaran adalah ${area.toFixed(3)}`);

// Soal 4 "Sudut ketiga dari Segitiga dengan x=80, y=65"

let corner1: number = 80;
let corner2: number = 65;
let total: number = 180;

const corner3: number = total - (corner1 + corner2)
console.log(`Sudut ketiganya adalah ${corner3}`);

// Soal 5 "Nyatakan Jumlah hari dengan tahun, bulan dan hari"
// 1 tahun = 365 hari, 1 bulan = 30 hari
// a : 400 hari 
let _days: number = 400;

const _years: number = Math.floor(_days / 365);
const _daysLeft: number = _days % 365;

const _months: number = Math.floor(_daysLeft / 30);
const _day: number = _daysLeft % 30;

console.log(`${_days} hari : ${_years} tahun, ${_months} bulan ${_day} hari`);


// b : 366 hari
let _jumlahHari: number = 366;

const _tahun: number = Math.floor(_jumlahHari / 365);
const _sisaHari: number = _jumlahHari % 365;

const _bulan: number = Math.floor(_sisaHari / 30);
const _hari: number = _sisaHari % 30;

console.log(`${_jumlahHari} hari : ${_tahun} tahun, ${_bulan} bulan ${_hari} hari`);

// Soal 6
// Menghitung perbedaan hari antara dua tanggal

// const startDate: any = new Date("2022-01-20");
// const endDate: any = new Date("2022-01-22");

// startDate.setHours(0, 0, 0, 0);
// endDate.setHours(0, 0, 0, 0);

// const oneDay: number = 24 * 60 * 60 * 1000;
// const diff: number = Math.abs(startDate - endDate);
// const day: number = Math.round(diff / oneDay);

// console.log(`Perbedaan antara tanggal adalah ${day} hari`);



const startDate: Date = new Date("2022-01-20");
const endDate: Date = new Date("2022-01-22");
const diff = (endDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000);
console.log(diff);