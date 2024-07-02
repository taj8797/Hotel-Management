const mongoose =require('mongoose');

   mongoose.connect(process.env.db).then(()=>{


    console.log("db is connected");
 
}).catch((err) =>{
console.log('db is not connected',err);

 })