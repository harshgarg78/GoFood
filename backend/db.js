const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://GoFood:harshgarg1A%40@cluster0.xapcbpc.mongodb.net/GoFood?retryWrites=true&w=majority'

const mongoDB =async() =>{
  await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      console.log("data fetched");
      fetched_data.find({}).toArray(async function(err,data){
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function(err,catData){
          if(err) console.log(err);
          else{
            global.food_items = data;
            global.foodCategory = catData;
          }

        })
      }) 

    }
  });
}
 

module.exports = mongoDB;

