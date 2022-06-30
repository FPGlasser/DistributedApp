/*
  Warnings:

  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Cliente` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Encomenda" DROP CONSTRAINT "Encomenda_id_cliente_fkey";

-- DropIndex
DROP INDEX "Cliente_id_key";

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "password" VARCHAR(16) NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cnpj");

-- AlterTable
ALTER TABLE "Encomenda" ALTER COLUMN "entregue" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cnpj_key" ON "Cliente"("cnpj");

-- AddForeignKey
ALTER TABLE "Encomenda" ADD CONSTRAINT "Encomenda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
