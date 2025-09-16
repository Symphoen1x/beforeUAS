import 'dart:io';

// -- Perbedaan cara input user string dengan int dan float

// Penggunaan method "stdin.readLineSync()" mereturn hasil string? -> 
// disebut juga nullable string atau bisa string atau null

// -- string normaly
// void main() {
//   print("Enter name:");
//   String? name  = stdin.readLineSync();
//   print("The entered name is $name");
// }

// -- int harus pakai parse method dan "!" diakhir
// void main() {
//   print("Enter number:");
//   int? numbers = int.parse(stdin.readLineSync()!);
//   print("The entered number is $numbers");
// }

// -- make string jadi list, agak laen caranya
// // Normal method
// void main() { 
//   String allNames = "Ram, Hari, Shyam, Gopal";

//   List<String> listNames = allNames.split(",");
//   print("Value of listName is $listNames");

//   print("List name at 0 index ${listNames[0]}");
//   print("List name at 1 index ${listNames[1]}");
//   print("List name at 2 index ${listNames[2]}");
//   print("List name at 3 index ${listNames[3]}");
   
// } 

// rupa rupanya bisa juga
void main() { 
  String allNames = "Ram{ Hari{ Shyam{ Gopal";

  List<String> listNames = allNames.split("{");
  print("Value of listName is $listNames");

  print("List name at 0 index ${listNames[0]}");
  print("List name at 1 index ${listNames[1]}");
  print("List name at 2 index ${listNames[2]}");
  print("List name at 3 index ${listNames[3]}");
   
} 