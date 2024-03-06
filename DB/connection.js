import mongoose from 'mongoose';

const connection = async() =>{
  return mongoose.connect(`mongodb:https://instagram-api-vcot.onrender.com/instagram-api`).
  then((result)=>console.log('connection success')).
  catch(err=>console.log(err))
}
export default connection;