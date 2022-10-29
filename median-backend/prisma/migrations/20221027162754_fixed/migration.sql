/*
  Warnings:

  - You are about to drop the column `body` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Users` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pp_url` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "body",
DROP COLUMN "published",
ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "image_url" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "name",
DROP COLUMN "surname",
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "pp_url" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(3),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ(3);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
