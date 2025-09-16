//  -- Materi basic/fundamental Dart --
// Sumber bisa cek: https://dart-tutorial.com/ atau https://www.tutorialspoint.com/dart_programming/index.htm
// Catatan penting doang + skenario yang ga appear langsung/tidak tersaji

// Tipe data dynamic vs static
/*
Intinya, kalau dynamic itu dia fleksible, mau awalnya num dulu baru diganti yang lain, pas return adalah yang terakhir dideklarasikan
*/
// Dynamic
// main(){
//   num satuDua = 13;
//   print("He is $satuDua");
//   dynamic name = "Banana";
//   name = 12;
//   print(name.runtimeType);
//   print(name is String);
// }

// Static
/*
Intinya static tuh tipe datanya diketahui saat compile time/sebelum eksekusi, sehingga compiler dapat dengan cepat mengecek eror & bug code
*/
// main() {
//   var esTeh = 3000;
//   esTeh = "Jumbo";
//   print(esTeh);
// }

// -- Penjelasan lebih mudah dalam memahami increment & decrement -> pre & post --
/*
Pahami bahwa pre itu maksudnya ++/--Var, sementara post var++/--
* Cara bacanya semudah:
pre: dia tambah/kurang dulu baru direturn sehingga returnnya adalah nilai variabel yang didefine setelah di tambah/dikurang 1
post: dia return dulu baru di tambah/kurang sehingga returnnya adalah nilai var yang didefine awal sebelum di tambah/dikurang 1

* Fungsionality yang umum digunakan dari perbedaan keduanya
pre: Perlu nilai terkini saat event terjadi
post: perlu mengetahui nilai sebelum ada kejadian, misalnya karena eror/gagal di current return, terus mau analisis kira-kira sebelumnya tuh berapa dari segi value varnya
      biasanya digunakan pas logging -> mencatat/monitoring aktivitas sistem ke dalam log file/konsol 
      atau debugging -> mencari/memperbaiki bug dalam suatu proses yang berjalan
*/

// Contoh post
int queueNumber = 100;

// void registerPatientPostIncrement() {
//   print("Nomor antrian Anda: ${queueNumber++}");
// }
// void main() {
//   print("Pendaftaran pasien:");
//      registerPatientPostIncrement();
//      registerPatientPostIncrement();
//      registerPatientPostIncrement();
//   print("\nSemua pasien telah didaftarkan.");
// }

// Contoh pre
// void registerPatientPreIncrement() {
//   print("Nomor antrian Anda: ${++queueNumber}");
// }

// void main() {
//   registerPatientPreIncrement();
// registerPatientPreIncrement();
// registerPatientPreIncrement();
// }

