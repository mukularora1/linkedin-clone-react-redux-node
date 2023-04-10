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
ALTER TABLE `users` CHANGE `created_at` `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `users` CHANGE `phone_number` `phone_number` BIGINT NULL DEFAULT NULL;
ALTER TABLE `users` ADD UNIQUE (`email`);
ALTER TABLE `users` ADD UNIQUE (`phone_number`);
ALTER TABLE `users` ADD `display_picture_url` VARCHAR(255) NULL DEFAULT NULL AFTER `password`;
ALTER TABLE `users` ADD `background_image_url` VARCHAR(255) NULL DEFAULT NULL AFTER `display_picture_url`;
ALTER TABLE `users` ADD `name` VARCHAR(255) NULL DEFAULT NULL AFTER `id`;
----------------------------------------------------------------------------------------------------------------------------
--Dev : Mukul Arora
--Task : upload images to folder for profile picture and background image
--Date : 10-04-2023

--> create a dir in root of projects : uploads
--> create a dir name 'profile_img' : uploads/profile_img for profile image uploads
--> create a dir name ' background_img' : uploads/background_img for background of profile