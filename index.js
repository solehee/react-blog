const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JinHee:9411@react-blog.ryfso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                ,{useNewUrlParser: true}).then(() => console.log('DB connected'))
                                         .catch(err => console.error(err));

// get 방식으로 받기
app.get('/',(req,res)=>{
    res.send('hello word')
});

// node 에서 기본포트 번호 5000번
app.listen(5050);