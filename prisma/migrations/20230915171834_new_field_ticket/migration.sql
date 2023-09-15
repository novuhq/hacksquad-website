/*
  Warnings:

  - A unique constraint covering the columns `[github_handle]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "colorSchema" TEXT DEFAULT '1',
ADD COLUMN     "github_handle" TEXT,
ADD COLUMN     "ticketId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_github_handle_key" ON "User"("github_handle");
