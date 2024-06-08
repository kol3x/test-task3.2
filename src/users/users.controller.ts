import { Controller, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('/reset-problems')
  async updateProblemFlags(): Promise<{ message: string; count: number }> {
    return this.usersService.updateProblemFlags();
  }
}