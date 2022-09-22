import { Controller, Get, Post, Body } from '@nestjs/common';
import { ScoreboardService } from './scoreboard.service';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';

@Controller('scoreboard')
export class ScoreboardController {
  constructor(private readonly scoreboardService: ScoreboardService) {}

  @Post()
  create(@Body() createScoreboardDto: CreateScoreboardDto) {
    return this.scoreboardService.create(createScoreboardDto);
  }

  @Get()
  findAll() {
    return this.scoreboardService.findAll();
  }
}
