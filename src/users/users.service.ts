import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async updateProblemFlags(): Promise<{ message: string; count: number }> {
    try {
      const count = await this.prisma.user.count({ where: { problems: true } });

      await this.prisma.user.updateMany({
        where: { problems: true },
        data: { problems: false },
      });

      return { message: 'Problem flags updated successfully', count };
    } catch (error) {
      throw new Error('Error updating problem flags');
    }
  }
}
