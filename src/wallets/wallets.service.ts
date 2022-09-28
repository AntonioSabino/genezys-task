import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet, WalletDocument } from './schema/wallet.schema';
import { createAccount, getBalance } from '../utils/web3';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<WalletDocument>,
  ) {}

  async create({ userId }: CreateWalletDto): Promise<Wallet> {
    const walletAddress = createAccount();

    const createdWallet: WalletDocument = new this.walletModel({
      userId,
      walletAddress,
    });
    return createdWallet.save();
  }

  async getById(userId: string) {
    const wallet: WalletDocument = await this.walletModel.findOne({ userId });

    if (!wallet) {
      return null;
    }

    const balance = await getBalance(wallet.walletAddress);

    const walletBalance = {
      walletAddress: wallet.walletAddress,
      walletBalance: balance,
    };

    return walletBalance;
  }
}
