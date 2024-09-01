// Soal 1 "Luas Persegi Panjang"
// Rumus luas persegi panjang (length * width)

let _length: number = 5;
let _width: number = 3;
const _broad: number = _length * _width;
console.log(`Luas persegi panjang adalah ${_broad}`);

// Soal 2 "Keliling Persegi Panjang"
// Rumus keliling persegi panjang (2 * (length + width))
const _around: number = 2 * (_length + _width);
console.log(`Keliling persegi panjang adalah ${_around}`);

// Soal 3
// a "Diameter Lingkaran" Rumus(2 * radius)
let _radius: number = 5;
const _diameter: number = 2 * _radius;
console.log(`Diameter lingkaran adalah ${_diameter}`);

// b "Keliling Lingkaran" Rumus(2PI_radius)
const _circumference: number = 2 * Math.PI * _radius;
console.log(`Keliling lingkaran adalah ${_circumference.toFixed(4)}`);

// c "Luas lingkaran" Rumus(PI * radius(2))
const _area: number = Math.PI * Math.pow(_radius, 2);
console.log(`Luas lingkaran adalah ${_area.toFixed(3)}`);

// Soal 4 "Sudut ketiga dari Segitiga dengan x=80, y=65"
// Rumus ( 180-(x + y) )
let x:number = 80;
let y:number = 65;
const z:number = 180 - (x + y);
console.log(`Sudut ketiganya adalah ${z}`);

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

let date1: string = "2022-01-20";
let date2: string = "2022-01-22";

const startDate: any = new Date(date1);
const endDate: any = new Date(date2);

startDate.setHours(0, 0, 0, 0);
endDate.setHours(0, 0, 0, 0);

const oneDay: number = 24 * 60 * 60 * 1000;
const diff: number = Math.abs(startDate - endDate);
const day: number = Math.round(diff / oneDay);

console.log(`Perbedaan antara tanggal adalah ${day} hari`);
