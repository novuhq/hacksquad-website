-- CreateEnum
CREATE TYPE "ActionType" AS ENUM ('KICK_USER', 'DELTE_PR', 'RECOVER_PR', 'DISQUALIFY_USER', 'RECOVER_USER', 'DISQUALITY_TEAM', 'RECOVER_TEAM');

-- CreateEnum
CREATE TYPE "WinnerType" AS ENUM ('EXTRA', 'COMPETITION', 'NOVU');

-- CreateEnum
CREATE TYPE "SocialMedia" AS ENUM ('TWITTER', 'DEVTO');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REPORT', 'DELETED');

-- CreateTable
CREATE TABLE "Articles" (
    "id" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "articleTitle" TEXT NOT NULL,
    "articleLink" TEXT NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticlesVotes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,

    CONSTRAINT "ArticlesVotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "ActionLogs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actionType" "ActionType" NOT NULL,
    "pr" TEXT,
    "prDetails" TEXT,
    "userId" TEXT,
    "teamId" TEXT,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "ActionLogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "pr" TEXT NOT NULL,
    "status" "Status" NOT NULL
);

-- CreateTable
CREATE TABLE "Social" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "type" "SocialMedia" NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "moderator" BOOLEAN NOT NULL DEFAULT false,
    "cleaner" BOOLEAN NOT NULL DEFAULT false,
    "handle" TEXT,
    "teamId" TEXT,
    "inviteId" TEXT,
    "disqualified" BOOLEAN NOT NULL DEFAULT false,
    "githubUserId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Winners" (
    "id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "lastDateClaim" TIMESTAMP(3) NOT NULL,
    "type" "WinnerType" NOT NULL,
    "claimed" TIMESTAMP(3),

    CONSTRAINT "Winners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Articles_articleId_key" ON "Articles"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team_ownerId_key" ON "Team"("ownerId");

-- CreateIndex
CREATE INDEX "Team_slug_idx" ON "Team"("slug");

-- CreateIndex
CREATE INDEX "Team_disqualified_idx" ON "Team"("disqualified");

-- CreateIndex
CREATE INDEX "ActionLogs_pr_idx" ON "ActionLogs"("pr");

-- CreateIndex
CREATE INDEX "ActionLogs_prDetails_idx" ON "ActionLogs"("prDetails");

-- CreateIndex
CREATE INDEX "ActionLogs_actionType_idx" ON "ActionLogs"("actionType");

-- CreateIndex
CREATE INDEX "ActionLogs_createdAt_idx" ON "ActionLogs"("createdAt");

-- CreateIndex
CREATE INDEX "ActionLogs_teamId_idx" ON "ActionLogs"("teamId");

-- CreateIndex
CREATE INDEX "ActionLogs_adminId_idx" ON "ActionLogs"("adminId");

-- CreateIndex
CREATE INDEX "ActionLogs_userId_idx" ON "ActionLogs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Report_pr_key" ON "Report"("pr");

-- CreateIndex
CREATE INDEX "Report_status_idx" ON "Report"("status");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Winners_month_idx" ON "Winners"("month");

-- CreateIndex
CREATE INDEX "Winners_year_idx" ON "Winners"("year");

-- CreateIndex
CREATE INDEX "Winners_userId_idx" ON "Winners"("userId");

-- CreateIndex
CREATE INDEX "Winners_claimed_idx" ON "Winners"("claimed");

-- CreateIndex
CREATE UNIQUE INDEX "Winners_month_year_userId_type_key" ON "Winners"("month", "year", "userId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "ArticlesVotes" ADD CONSTRAINT "ArticlesVotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticlesVotes" ADD CONSTRAINT "ArticlesVotes_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionLogs" ADD CONSTRAINT "ActionLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionLogs" ADD CONSTRAINT "ActionLogs_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionLogs" ADD CONSTRAINT "ActionLogs_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Winners" ADD CONSTRAINT "Winners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
