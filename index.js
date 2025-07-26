const mongoose=require('mongoose')


main().then((res)=>{
    console.log("Connection successfull")
    console.log(res);
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User=mongoose.model("User",userSchema);

// const user1=new User({name:"shashi",email:"shashidhar@gmail.com",age:21});
// user1.save(); // returns a promise

// const user2=new User({name:"sai charan",email:"charan@gmail.com",age:34});
// user2.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([{name : "alex",email:"alex@gmail.com",age:21},
//     {name : "ram",email:"ram@gmail.com",age:22},
//     {name : "sam",email:"sam@gmail.com",age:23}]).
//     then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     }
// )

//use find 

User.find({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//with certain filter or condition

User.find({age:{$gte:34}}).
then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.find({age:{$gt:20}}).
then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})