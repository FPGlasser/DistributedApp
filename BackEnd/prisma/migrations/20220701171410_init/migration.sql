/*
  Warnings:

  - A unique constraint covering the columns `[count]` on the table `Status` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Status_data_key";

-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "count" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Status_count_key" ON "Status"("count");
