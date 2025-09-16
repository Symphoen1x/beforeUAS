 // TODO:
// 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
// 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
//   "Halo! Nama saya (name). Saya tinggal di (origin)."
// 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
let hello = (name, origin="Bandung") => 
    `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
  
/*
4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
*/
const rahmat = hello("Rahmat", "Semarang")
console.log(rahmat);


const indra = hello("Indra")
console.log(indra);