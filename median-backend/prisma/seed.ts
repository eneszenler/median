// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.users.upsert({
    where: { email: 'yusufeneszenler@gmail.com' },
    update: {},
    create: {
      full_name: 'Yusuf Enes Zenler',
      username: 'eneszenler',
      pp_url: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      email: 'yusufeneszenler@gmail.com',
      password: 'yusuf123',
      articles: {
        create: {
          image_url:
            'https://miro.medium.com/max/1200/1*9UN-8OUzyVJBaKiVNX5dig.png',
          title: '15 Best Practices for First Voice Call Resolution',
          description: 'description',
        },
      }
     
    },
  });

  console.log({ user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
