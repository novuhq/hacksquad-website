-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REPORT', 'DELETED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "disqualified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "githubUserId" INTEGER,
ADD COLUMN     "moderator" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "teamId" TEXT,
ALTER COLUMN "handle" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "score" INTEGER,
    "ownerId" TEXT NOT NULL,
    "prs" TEXT,
    "githubTeamId" INTEGER,
    "allowAutoAssign" BOOLEAN NOT NULL,
    "disqualified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "pr" TEXT NOT NULL,
    "status" "Status" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team_ownerId_key" ON "Team"("ownerId");

-- CreateIndex
CREATE INDEX "Team_slug_idx" ON "Team"("slug");

-- CreateIndex
CREATE INDEX "Team_disqualified_idx" ON "Team"("disqualified");

-- CreateIndex
CREATE UNIQUE INDEX "Report_pr_key" ON "Report"("pr");

-- CreateIndex
CREATE INDEX "Report_status_idx" ON "Report"("status");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
