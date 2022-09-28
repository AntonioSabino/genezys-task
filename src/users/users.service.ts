import { Injectable } from '@nestjs/common';

export type TUser = {
  userId: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: TUser[] = [
    {
      userId: '2645a164-0221-4296-8620-6f9d3c15708a',
      username: 'john',
      password: 'changeme',
    },
    {
      userId: '5f71297e-cf9f-4c78-88ff-1867f131a3d4',
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<TUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
