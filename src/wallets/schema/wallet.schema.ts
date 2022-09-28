import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {
  @Prop()
  userId: string;

  @Prop()
  walletAddress: string;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
