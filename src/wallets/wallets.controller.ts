import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createWalletDto: CreateWalletDto) {
    const { userId, walletAddress } = await this.walletsService.create(
      createWalletDto,
    );

    return { userId, walletAddress };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  getById(@Param('userId') userId: string) {
    return this.walletsService.getById(userId);
  }
}
