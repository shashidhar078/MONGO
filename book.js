const mongoose=require('mongoose');

main().then((res)=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
});

const Book=mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title:"Marvel Comic",
//     author:"Stan lee",
//     price:1200,
//     category:"fiction",
// });

// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Book.findByIdAndUpdate('68862932d97a9c7450f1eeb6',{price:1500},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})