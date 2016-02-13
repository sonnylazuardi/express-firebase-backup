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

untuk menjalankan 

```
npm start
```