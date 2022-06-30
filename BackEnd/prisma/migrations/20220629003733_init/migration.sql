/*
  Warnings:

  - You are about to drop the column `emailcliente` on the `Cliente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Cliente_emailcliente_key";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "emailcliente";
