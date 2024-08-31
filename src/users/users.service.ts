import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Members } from './interface/members.interface';
import { MembersDTO } from './dto/members.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('MEMBER_MODEL')
    private memberModel: Model<Members>,
  ) {}

  async create(membersDto: MembersDTO): Promise<Members> {
    const createdCat = new this.memberModel(membersDto);
    return createdCat.save();
  }

  async findAll(): Promise<Members[]> {
    return this.memberModel.find().exec();
  }
}