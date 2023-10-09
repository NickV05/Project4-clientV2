import mongoose from 'mongoose';


export interface User {
    _id:mongoose.Types.ObjectId,
    email:string,
    password:string,
    fullName:string,
    location:string,
    username:string,
    image:string,
    createdAt:string,
    updatedAt:string
}