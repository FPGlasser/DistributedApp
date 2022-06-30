/*
  Warnings:

  - You are about to drop the column `contacto` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `email` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "contacto",
ADD COLUMN     "email" VARCHAR(30) NOT NULL,
ADD COLUMN     "telefone" INTEGER NOT NULL;
