import connectDB from './config/db.connection.js'
import app from './app.js'

connectDB().then(
    app.listen(3000),
    ()=>{
        console.log(" database  connected !!")
    }
).catch(
    ()=>{
        console.log("faild to connect with database")
    }
)