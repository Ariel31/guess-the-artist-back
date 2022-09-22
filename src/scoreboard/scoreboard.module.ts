import { Module } from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import { ScoreboardController } from './scoreboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/scoreboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Score])],
  controllers: [ScoreboardController],
  providers: [ScoreboardService],
})
export class ScoreboardModule {}
