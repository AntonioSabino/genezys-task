import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallet, WalletSchema } from './schema/wallet.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wallet.name, schema: WalletSchema }]),
    AuthModule,
  ],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
