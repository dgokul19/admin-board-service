import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Members } from './interface/members.interface';
import { MembersDTO } from './dto/members.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('MEMBER_MODEL')
    private memberModel: Model<Members>,
  ) {
    console.log('tjos', this.memberModel);
  }

  async create(membersDto: MembersDTO): Promise<Members> {
    const members = new this.memberModel(membersDto);
    return members.save();
  }

  async findAll(): Promise<Members[]> {
    return this.memberModel.find().exec();
  }

  async findUser(id: String): Promise<Members> {
    console.log('im here');

    return this.memberModel.findOne({ _id : id });
  }
}