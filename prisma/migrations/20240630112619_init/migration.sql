-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StokDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `golongan` ENUM('A', 'AB', 'B', 'O') NOT NULL,
    `jumlah` INTEGER NOT NULL,

    UNIQUE INDEX `StokDarah_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KartuGolonganDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `Telpon` VARCHAR(191) NOT NULL,
    `golongan_darah` ENUM('A', 'AB', 'B', 'O') NOT NULL,

    UNIQUE INDEX `KartuGolonganDarah_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataPendonor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomer` INTEGER NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `golongan_darah` ENUM('A', 'AB', 'B', 'O') NOT NULL,
    `kategori_donor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DataPendonor_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LabelDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produk` VARCHAR(191) NOT NULL,
    `volume` VARCHAR(191) NOT NULL,
    `waktu_permintaan` VARCHAR(191) NOT NULL,
    `waktu_exp` VARCHAR(191) NOT NULL,
    `golongan_darah` ENUM('A', 'AB', 'B', 'O') NOT NULL,
    `rhesus` VARCHAR(191) NOT NULL,
    `non_reaktif` VARCHAR(191) NOT NULL,
    `no_kantong` VARCHAR(191) NOT NULL,
    `suhu_penyimpanan` VARCHAR(191) NOT NULL,
    `no_rmk` VARCHAR(191) NOT NULL,
    `nama_pasien` VARCHAR(191) NOT NULL,
    `ruangan` VARCHAR(191) NOT NULL,
    `hasil_pemeriksaan` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LabelDarah_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PemusnahanDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jabatan` VARCHAR(191) NOT NULL,
    `ruangan` VARCHAR(191) NOT NULL,
    `nomor` VARCHAR(191) NOT NULL,
    `telah_melakukan_pemusnaha` VARCHAR(191) NOT NULL,
    `tempat_melakukan_pemusnahan` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PemusnahanDarah_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlankoDarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_rmk` VARCHAR(191) NOT NULL,
    `nama_pasien` VARCHAR(191) NOT NULL,
    `ruangan` VARCHAR(191) NOT NULL,
    `golongan_darah` ENUM('A', 'AB', 'B', 'O') NOT NULL,
    `rhesus` VARCHAR(191) NOT NULL,
    `nomer` VARCHAR(191) NOT NULL,
    `no_cross_test` VARCHAR(191) NOT NULL,
    `no_kantong_darah` VARCHAR(191) NOT NULL,
    `jenis_darah` VARCHAR(191) NOT NULL,
    `hasil_pemeriksaan` VARCHAR(191) NOT NULL,
    `reaksi_transfusi` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `BlankoDarah_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
