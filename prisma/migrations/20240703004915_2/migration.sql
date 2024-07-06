/*
  Warnings:

  - You are about to alter the column `waktu_permintaan` on the `LabelDarah` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `waktu_exp` on the `LabelDarah` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `LabelDarah` MODIFY `waktu_permintaan` DATETIME(3) NOT NULL,
    MODIFY `waktu_exp` DATETIME(3) NOT NULL;
