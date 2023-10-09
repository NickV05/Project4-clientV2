import mongoose from 'mongoose';


export interface User {
    _id:mongoose.Types.ObjectId,
    email:string,
    password:any,
    fullName:string,
    location:string,
    username:string,
    image:string,
    createdAt:any,
    updatedAt:any
}