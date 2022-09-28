import { IsString, IsUUID } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @IsUUID('4')
  userId: string;
}
