/*
  Warnings:

  - You are about to drop the column `email` on the `Cliente` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailcliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailcliente` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cliente_email_key";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "email",
ADD COLUMN     "emailcliente" VARCHAR(30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_emailcliente_key" ON "Cliente"("emailcliente");
