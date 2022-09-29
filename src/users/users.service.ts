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
      username: 'Antonio',
      password: 'Sabino',
    },
    {
      userId: '5f71297e-cf9f-4c78-88ff-1867f131a3d4',
      username: 'Sabino',
      password: 'Antonio',
    },
  ];

  async findOne(username: string): Promise<TUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
