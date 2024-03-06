import mongoose from 'mongoose';

const connection = async() =>{
  return mongoose.connect(`mongodb://127.0.0.1:27017/instagram-api`).
  then((result)=>console.log('connection success')).
  catch(err=>console.log(err))
}
export default connection;