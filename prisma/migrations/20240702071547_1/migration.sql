/*
  Warnings:

  - You are about to drop the column `nama_pasien` on the `BlankoDarah` table. All the data in the column will be lost.
  - You are about to drop the column `no_kantong_darah` on the `BlankoDarah` table. All the data in the column will be lost.
  - You are about to drop the column `nomer` on the `BlankoDarah` table. All the data in the column will be lost.
  - Added the required column `name` to the `BlankoDarah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_kantong` to the `BlankoDarah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal` to the `BlankoDarah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BlankoDarah` DROP COLUMN `nama_pasien`,
    DROP COLUMN `no_kantong_darah`,
    DROP COLUMN `nomer`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `no_kantong` VARCHAR(191) NOT NULL,
    ADD COLUMN `tanggal` DATETIME(3) NOT NULL;
