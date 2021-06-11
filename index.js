let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000; 

// views 폴더 밑에 html 파일 넣어 놓음
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 나머지는 public에 넣어 놓음
app.use(express.static('public'));


// 웹 서버를 동작시키는 구문
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
