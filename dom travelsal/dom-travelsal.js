const nama = document.querySelector(".nama");
//Jangan pakai nextSibling nanti keluarnya spaci, dan harus memakai nextElementSibling
//previousElementSibling => sebelum
//nextElementSibling => sesudah
console.log(nama.parentElement); // Parentnya => element
console.log(nama.parentElement.parentElement); //kakek pakai . => container
console.log(nama.nextElementSibling); //element selanjutnya => telp
console.log(nama.nextElementSibling.nextElementSibling); //close
console.log(nama.previousElementSibling); //IMG
console.log(nama.previousElementSibling.previousElementSibling); //Nul;
