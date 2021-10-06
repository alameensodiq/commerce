require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')


const app= express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))


//Routers
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))


//connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=> {
        console.log('DB connections successful!')
    }
);


// app.get('/', (req, res)=> {
//     res.status(200).json({
//         msg:'Welcome on board,please subscribe to our channel.Thanks'
//     })
// })

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/front/build')));
    app.get('/', (req, res)=> {
        res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
    })
} 
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log('Server is running on port', PORT)
})