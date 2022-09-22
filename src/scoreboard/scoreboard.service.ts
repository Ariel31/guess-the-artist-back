import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScoreboardDto } from './dto/create-scoreboard.dto';
import { Score } from './entities/scoreboard.entity';

@Injectable()
export class ScoreboardService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
  ) {}

  async create(createScoreboardDto: CreateScoreboardDto) {
    try {
      const score = this.scoreRepository.create({ ...createScoreboardDto });
      return await this.scoreRepository.save(score);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('failed to add score');
    }
  }

  async findAll() {
    try {
      return await this.scoreRepository.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('failed to get scoreboard');
    }
  }
}
