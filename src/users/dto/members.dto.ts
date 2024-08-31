import * as mongoose from 'mongoose';

export class MembersDTO {
  readonly name: String;
  readonly email: String;
  readonly phone: Number;
  readonly password : String;
  readonly isActive : Boolean;
};