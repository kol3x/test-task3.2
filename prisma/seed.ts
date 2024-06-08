import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const users = [];

  for (let i = 0; i < 1000000; i++) {
    users.push({
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 80 }),
      gender: faker.person.gender(),
      problems: i < 500000 ? true : false, // Half with problems set to true
    });
  }

  try {
    await prisma.user.createMany({
      data: users,
    });
    console.log('Database has been seeded');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
