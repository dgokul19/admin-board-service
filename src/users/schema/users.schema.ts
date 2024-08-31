import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password : String,
  isActive : Boolean
});