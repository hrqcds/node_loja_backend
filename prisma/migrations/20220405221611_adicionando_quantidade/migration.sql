-- DropForeignKey
ALTER TABLE `ListaDeProdutos` DROP FOREIGN KEY `ListaDeProdutos_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `ListaDeProdutos` DROP FOREIGN KEY `ListaDeProdutos_produtoId_fkey`;

-- AlterTable
ALTER TABLE `ListaDeProdutos` ADD COLUMN `quantidade` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `ListaDeProdutos` ADD CONSTRAINT `ListaDeProdutos_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `Compra`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListaDeProdutos` ADD CONSTRAINT `ListaDeProdutos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
