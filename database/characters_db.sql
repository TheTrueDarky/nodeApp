-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2022 at 03:49 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `characters`
--
CREATE DATABASE IF NOT EXISTS `characters` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `characters`;

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `deaths` int(11) NOT NULL,
  `character_type` varchar(255) DEFAULT NULL,
  `link_id` int(11) NOT NULL,
  `auth_notes` varchar(500) DEFAULT NULL,
  `comments` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `link_id` (`link_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `first_name`, `surname`, `gender`, `age`, `deaths`, `character_type`, `link_id`, `auth_notes`, `comments`) VALUES
(null, 'Adreanna', 'Black', 'Female', 22000, 2, 'Goddess', 1, NULL, NULL),
(null, 'Demon', 'Kuro', 'Male', 20000, 0, 'Demon', 2, NULL, NULL),
(null, 'Turitan', NULL, 'Male', 100000, 1, 'Giant', 3, NULL, NULL),
(null, 'Hachishaku-sama', NULL, 'Female', 100000, 0, 'Monster', 4, NULL, NULL),
(null, 'Spencer', NULL, 'Male', 30, 32, 'Mortal', 5, NULL, NULL),
(null, 'Isla', 'Kuro', 'Female', 900000, 2, 'Primordial', 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `demon`
--

DROP TABLE IF EXISTS `demon`;
CREATE TABLE IF NOT EXISTS `demon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `demon_type` varchar(255) DEFAULT NULL,
  `ability` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `demon`
--

INSERT INTO `demon` (`id`, `demon_type`, `ability`) VALUES
(1, NULL, 'Hellish');

-- --------------------------------------------------------

--
-- Table structure for table `giants`
--

DROP TABLE IF EXISTS `giants`;
CREATE TABLE IF NOT EXISTS `giants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `giants`
--

INSERT INTO `giants` (`id`, `role`) VALUES
(1, 'King of the Giants');

-- --------------------------------------------------------

--
-- Table structure for table `gods`
--

DROP TABLE IF EXISTS `gods`;
CREATE TABLE IF NOT EXISTS `gods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `responsibility` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gods`
--

INSERT INTO `gods` (`id`, `responsibility`) VALUES
(1, 'Dimensions');

-- --------------------------------------------------------

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
CREATE TABLE IF NOT EXISTS `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `demon_id` int(11) DEFAULT NULL,
  `giant_id` int(11) DEFAULT NULL,
  `god_id` int(11) DEFAULT NULL,
  `monster_id` int(11) DEFAULT NULL,
  `mortal_id` int(11) DEFAULT NULL,
  `primordial_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `demon_id` (`demon_id`),
  UNIQUE KEY `giant_id` (`giant_id`),
  UNIQUE KEY `god_id` (`god_id`),
  UNIQUE KEY `monster_id` (`monster_id`),
  UNIQUE KEY `mortal_id` (`mortal_id`),
  UNIQUE KEY `primordial_id` (`primordial_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `link`
--

INSERT INTO `link` (`id`, `demon_id`, `giant_id`, `god_id`, `monster_id`, `mortal_id`, `primordial_id`) VALUES
(1, NULL, NULL, 1, NULL, NULL, NULL),
(2, 1, NULL, NULL, NULL, NULL, NULL),
(3, NULL, 1, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, 1, NULL, NULL),
(5, NULL, NULL, NULL, NULL, 1, NULL),
(6, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `monsters`
--

DROP TABLE IF EXISTS `monsters`;
CREATE TABLE IF NOT EXISTS `monsters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monster_type` varchar(255) DEFAULT NULL,
  `abilities` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `monsters`
--

INSERT INTO `monsters` (`id`, `monster_type`, `abilities`) VALUES
(1, 'Takaonna', 'Being tall');

-- --------------------------------------------------------

--
-- Table structure for table `mortals`
--

DROP TABLE IF EXISTS `mortals`;
CREATE TABLE IF NOT EXISTS `mortals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mortals`
--

INSERT INTO `mortals` (`id`, `job`) VALUES
(1, 'Former policeman');

-- --------------------------------------------------------

--
-- Table structure for table `primordials`
--

DROP TABLE IF EXISTS `primordials`;
CREATE TABLE IF NOT EXISTS `primordials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `primordials`
--

INSERT INTO `primordials` (`id`, `department`) VALUES
(1, 'Reincarnation');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`link_id`) REFERENCES `link` (`id`);

--
-- Constraints for table `link`
--
ALTER TABLE `link`
  ADD CONSTRAINT `link_ibfk_1` FOREIGN KEY (`monster_id`) REFERENCES `monsters` (`id`),
  ADD CONSTRAINT `link_ibfk_2` FOREIGN KEY (`demon_id`) REFERENCES `demon` (`id`),
  ADD CONSTRAINT `link_ibfk_3` FOREIGN KEY (`giant_id`) REFERENCES `giants` (`id`),
  ADD CONSTRAINT `link_ibfk_4` FOREIGN KEY (`god_id`) REFERENCES `gods` (`id`),
  ADD CONSTRAINT `link_ibfk_5` FOREIGN KEY (`mortal_id`) REFERENCES `mortals` (`id`),
  ADD CONSTRAINT `link_ibfk_6` FOREIGN KEY (`primordial_id`) REFERENCES `primordials` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
