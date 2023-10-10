-- CreateTable
CREATE TABLE "feedback" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "comments" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "feedback_email_key" ON "feedback"("email");
