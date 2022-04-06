/*
  Warnings:

  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListaDeProdutos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ListaDeProdutos` DROP FOREIGN KEY `ListaDeProdutos_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `ListaDeProdutos` DROP FOREIGN KEY `ListaDeProdutos_produtoId_fkey`;

-- DropTable
DROP TABLE `Compra`;

-- DropTable
DROP TABLE `ListaDeProdutos`;

-- DropTable
DROP TABLE `Produto`;

-- CreateTable
CREATE TABLE `compras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DOUBLE NOT NULL,
    `tipo_pagamento` ENUM('DEBITO', 'CREDITO', 'DINHEIRO') NOT NULL,
    `status` ENUM('AGUARDANDO', 'CONCLUIDO') NOT NULL DEFAULT 'AGUARDANDO',
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_atualizacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lista_de_produtos` (
    `compraId` INTEGER NOT NULL,
    `produtoId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL DEFAULT 1,
    `adicionado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`compraId`, `produtoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lista_de_produtos` ADD CONSTRAINT `lista_de_produtos_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `compras`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lista_de_produtos` ADD CONSTRAINT `lista_de_produtos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
