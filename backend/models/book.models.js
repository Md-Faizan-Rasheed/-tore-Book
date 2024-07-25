import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  numer:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  image:{
    type:String,
  },
  title:{
    type:String,
  }
})

const Book = mongoose.model("Book",bookSchema);

export default Book;