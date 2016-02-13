# Express Firebase Backup

Pertama, install node.js (http://nodejs.org/)

Lalu, di direktori reponya

```
npm install
```

lalu jangan lupa nyalakan service mysql (bisa dari xampp/wamp)
atur settingan di file index.js

```
var mysql_username = 'root';
var mysql_password = 'root';
var mysql_host = 'localhost';
var mysql_database = 'expressfirebase';
```

jangan lupa juga ganti instance firebase jadi punya sendiri

```
var ref = new Firebase("https://express-crud.firebaseio.com/");
```

strukturnya kira2 seperti ini

![ss](https://lh3.googleusercontent.com/-j1GAqBXe9Ss/Vr76LOjIozI/AAAAAAAAG6Q/rfiHFPV8ce8/s0/Screen+Shot+2016-02-13+at+4.12.33+PM.png "Screen Shot 2016-02-13 at 4.12.33 PM.png")


untuk menjalankan 

```
npm start
```
