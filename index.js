var express = require ('express');
var orm = require('orm');
var qOrm = require('q-orm');
var Firebase = require('firebase');

var app = express();
var mysql_username = 'root';
var mysql_password = 'root';
var mysql_host = 'localhost';
var mysql_database = 'expressfirebase';

var PostModel = null;

app.use(qOrm.qExpress("mysql://"+mysql_username+":"+mysql_password+"@"+mysql_host+"/"+mysql_database, {
    define: function(db, models, next) {
        models.Post = db.qDefine("posts", {
            id: {type: 'serial', key: true},
            title: String,
            author: String,
            content: String
        });
        PostModel = models.Post;
        db.qSync().then(function() {
            console.log('DB Synced');
        }).fail(function(err) {
            throw err;
        });
        next();
    }
}));

var ref = new Firebase("https://express-crud.firebaseio.com/");
ref.child('posts').on("child_added", function(snapshot) {
    var post = snapshot.val();

    var Post = PostModel;

    Post.qCreate({
        title: post.title, 
        author: post.author, 
        content: post.content
    })
    .then(item => {
        console.log(item);
    })
});

app.get('/posts', (req, res) => {
    var Post = req.models.Post;
    Post.qAll().then(function(posts) {
        res.json(posts);
    });
});

app.listen(8000, () => {
    console.log('Express firebase running on 8000');
});
