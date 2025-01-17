import { Connection } from 'mongoose';
import { MemberSchema } from './users.schema';

export const memberProviders = [
  {
    provide: 'MEMBER_MODEL',
    useFactory: (connection: Connection) => connection.model('Member', MemberSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];