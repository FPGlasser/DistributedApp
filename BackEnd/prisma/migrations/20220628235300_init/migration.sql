/*
  Warnings:

  - You are about to drop the column `id_admin` on the `Admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Terminal" DROP CONSTRAINT "Terminal_admin_fkey";

-- DropIndex
DROP INDEX "Admin_id_admin_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "id_admin",
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_cpf_key" ON "Admin"("cpf");

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_admin_fkey" FOREIGN KEY ("admin") REFERENCES "Admin"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
