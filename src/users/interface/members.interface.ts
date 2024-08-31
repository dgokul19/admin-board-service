import { Document } from 'mongoose';

export interface Members extends Document {
  readonly name: String,
  readonly email: String,
  readonly phone: Number,
  readonly isActive : Boolean
};