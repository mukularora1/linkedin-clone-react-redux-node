--Dev : Mukul Arora
--Task : Create user signup and login
--Date : 26-03-2023

CREATE TABLE `db_linkedin`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL,
  `phone_number` INT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

----------------------------------------------------------------------------------------------------------------------------
