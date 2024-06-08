import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  name: string;
  surname: string;
  age: number;
  gender: string;
  problems: boolean;
}
