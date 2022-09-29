import { IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @IsUUID('4')
  userId: string;

  @IsString()
  @IsUrl()
  url: string;
}
