/*
  Warnings:

  - Added the required column `imageLink` to the `Placeadd` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Placeadd" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL
);
INSERT INTO "new_Placeadd" ("createdAt", "description", "id", "title") SELECT "createdAt", "description", "id", "title" FROM "Placeadd";
DROP TABLE "Placeadd";
ALTER TABLE "new_Placeadd" RENAME TO "Placeadd";
PRAGMA foreign_key_check("Placeadd");
PRAGMA foreign_keys=ON;
