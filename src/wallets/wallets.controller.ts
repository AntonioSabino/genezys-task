import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    const { userId, walletAddress } = await this.walletsService.create(
      createWalletDto,
    );

    return { userId, walletAddress };
  }

  @Get(':userId')
  getById(@Param('userId') userId: string) {
    return this.walletsService.getById(userId);
  }
}
