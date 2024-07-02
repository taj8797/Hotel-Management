const express = require('express');

const app = express();

app.use(express.json())

require('dotenv').config()


const port  = process.env.PORT || 4002





app.get('/',(req,res)=>{

    res.send("hello world!")
})

//==============================for userRouter signUP login forgetPassword and password change =============================

const adminRouter = require('./Routes/adminRoutes')
const userRoters = require('./Routes/userRoutes')

const managerRouter = require('./Routes/managerRoutes')

const receptionistRouter = require('./Routes/receptionistRoutes')

app.use('/api/admin/',adminRouter)

app.use('/api/user',userRoters)

app.use('/api/manager',managerRouter)


app.use('/api/receptionist',receptionistRouter)

require('./db/db')


app.listen(port,() =>{


    console.log(`listening on ${port}`);


})