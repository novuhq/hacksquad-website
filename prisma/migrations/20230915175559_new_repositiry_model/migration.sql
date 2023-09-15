-- CreateEnum
CREATE TYPE "RepositoryStatus" AS ENUM ('NOT_DETERMINED', 'ACCEPTED', 'DENIED', 'BANNED');

-- CreateTable
CREATE TABLE "Repositories" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "RepositoryStatus" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Repositories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Repositories_url_idx" ON "Repositories"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Repositories_url_key" ON "Repositories"("url");
