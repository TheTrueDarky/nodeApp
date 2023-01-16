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
-- Database: `characters_db`
--
CREATE DATABASE IF NOT EXISTS `characters_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `characters_db`;

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
(1, 'Adreanna', 'Black', 'Female', 22000, 2, 'Goddess', 1, NULL, NULL),
(2, 'Demon', 'Kuro', 'Male', 20000, 0, 'Demon', 2, NULL, NULL),
(3, 'Turitan', NULL, 'Male', 100000, 1, 'Giant', 3, NULL, NULL),
(4, 'Hachishaku-sama', NULL, 'Female', 100000, 0, 'Monster', 4, NULL, NULL),
(5, 'Spencer', NULL, 'Male', 30, 32, 'Mortal', 5, NULL, NULL),
(6, 'Isla', 'Kuro', 'Female', 900000, 2, 'Primordial', 6, NULL, NULL),
(7, 'Adrianna', 'Black', 'Female', 22000, 2, 'Goddess', 7, '', ''),
(8, 'Adrynna', '', 'Female', 2147483647, 1, 'Goddess', 8, '', ''),
(9, 'Aemilia', '', 'Female', 0, 0, 'Goddess', 9, '', ''),
(10, 'Agni', '', 'Female', 0, 0, 'Goddess', 10, '', ''),
(11, 'Amaro', 'Kuro', 'Female', 0, 1, 'Goddess', 11, '', ''),
(12, 'Amata', '', 'Female', 0, 0, 'Goddess', 12, '', ''),
(13, 'Ambrosia', '', 'Female', 0, 0, 'Goddess', 13, '', ''),
(14, 'Angerona', '', 'Male', 0, 0, 'God', 14, '', ''),
(15, 'Anyo', 'Kuro', 'Female', 6, 0, 'Goddess', 15, '', ''),
(16, 'Apophis', '', 'Male', 0, 0, 'God', 16, '', ''),
(17, 'Apostle', 'Jhoan', 'Male', 0, 0, 'God', 17, '', ''),
(18, 'Argyros', '', 'Male', 0, 0, 'God', 18, '', ''),
(19, 'Aurora', 'Kuro', 'Female', 0, 0, 'Goddess', 19, '', ''),
(20, 'Basher-184', '', 'Male', 0, 0, 'God', 20, '', ''),
(21, 'Bel-sarra-usur', '', 'Male', 0, 0, 'God', 21, '', ''),
(22, 'Bratia', '', 'Female', 0, 0, 'Goddess', 22, '', ''),
(23, 'Celia', '', 'Female', 0, 0, 'Goddess', 23, '', ''),
(24, 'Charlotte', 'Black', 'Female', 0, 0, 'Goddess', 24, '', ''),
(25, 'Chryses', '', 'Male', 0, 0, 'God', 25, '', ''),
(26, 'DarkLight(Dacia)', 'Black', 'Female', 0, 0, 'Goddess', 26, '', ''),
(27, 'DarkLord', 'Black', 'Male', 0, 0, 'God', 27, '', ''),
(28, 'Darkness', 'Black', 'Male', 0, 0, 'God', 28, '', ''),
(29, 'Ellis', '', 'Other', 0, 0, 'Goddess', 29, '', ''),
(30, 'Enyo', 'Kuro', 'Female', 6, 0, 'Goddess', 30, '', ''),
(31, 'Eogan', '', 'Male', 0, 0, 'God', 31, '', ''),
(32, 'Fedelmid', '', 'Male', 0, 0, 'God', 32, '', ''),
(33, 'Furia', '', 'Male', 0, 0, 'God', 33, '', ''),
(34, 'Gaia', '', 'Female', 0, 0, 'Goddess', 34, '', ''),
(35, 'Harriah', '', 'Male', 0, 0, 'God', 35, '', ''),
(36, 'Harry', 'Black', 'Male', 10, 0, 'God', 36, '', ''),
(37, 'Hel', '', 'Female', 0, 0, 'Goddess', 37, '', ''),
(38, 'Helia', 'Furia', 'Female', 0, 0, 'Goddess', 38, '', ''),
(39, 'Hrothulf', '', 'Male', 0, 0, 'God', 39, '', ''),
(40, 'Ida', '', 'Female', 0, 0, 'Goddess', 40, '', ''),
(41, 'Issac', '', 'Male', 0, 0, 'God', 41, '', ''),
(42, 'Itchia', '', 'Male', 0, 0, 'God', 42, '', ''),
(43, 'Iucunda', '', 'Male', 0, 0, 'God', 43, '', ''),
(44, 'Iunia', '', 'Female', 0, 0, 'Goddess', 44, '', ''),
(45, 'Ivanke', '', 'Female', 0, 0, 'Goddess', 45, '', ''),
(46, 'Izanami', '', 'Male', 0, 0, 'God', 46, '', ''),
(47, 'Jodocus', '', 'Male', 0, 0, 'God', 47, '', ''),
(48, 'Kai', '', 'Male', 0, 0, 'Demon', 48, '', ''),
(49, 'Kali', 'Kuro', 'Female', 0, 0, 'Goddess', 49, '', ''),
(50, 'Kamala', '', 'Female', 0, 0, 'Goddess', 50, '', ''),
(51, 'Kapono', '', 'Male', 0, 0, 'God', 51, '', ''),
(52, 'Khione', 'White', 'Female', 0, 0, 'Goddess', 52, '', ''),
(53, 'King', 'Durian', 'Male', 0, 0, 'God', 53, '', ''),
(54, 'Kronos', '', 'Male', 0, 0, 'Titan', 54, '', ''),
(55, 'Kyna', '', 'Female', 0, 0, 'Goddess', 55, '', ''),
(56, 'Lai', 'Kuro', 'Female', 0, 0, 'Goddess', 56, '', ''),
(57, 'Lalia', 'Kuro', 'Female', 0, 0, 'Goddess', 57, '', ''),
(58, 'LightLord', 'White', 'Male', 0, 0, 'God', 58, '', ''),
(59, 'Lightness', 'White', 'Male', 0, 0, 'God', 59, '', ''),
(60, 'Lola', 'Rose', 'Female', 0, 0, 'Goddess', 60, '', ''),
(61, 'Lotto', 'Black', 'Female', 0, 0, 'Goddess', 61, '', ''),
(62, 'Lucy', 'White', 'Female', 0, 0, 'Goddess', 62, '', ''),
(63, 'Lumi', 'Kuro', 'Female', 0, 0, 'Monster', 63, '', ''),
(64, 'Luna', '', 'Female', 0, 0, 'Goddess', 64, '', ''),
(65, 'Lycurgus', '', 'Male', 0, 0, 'God', 65, '', ''),
(66, 'Maja', '', 'Female', 0, 0, 'Goddess', 66, '', ''),
(67, 'Malia', '', 'Female', 0, 0, 'Goddess', 67, '', ''),
(68, 'Mathias', '', 'Male', 0, 0, 'God', 68, '', ''),
(69, 'Mia', '', 'Female', 0, 0, 'Goddess', 69, '', ''),
(70, 'Miya', '', 'Female', 0, 0, 'Goddess', 70, '', ''),
(71, 'Molly', '', 'Female', 0, 0, 'Goddess', 71, '', ''),
(72, 'Reya', '', 'Female', 0, 0, 'Titaness', 72, '', ''),
(73, 'Nisha', 'Kuro', 'Female', 0, 0, 'Goddess', 73, '', ''),
(74, 'Omaro', '', 'Female', 0, 0, 'Goddess', 74, '', ''),
(75, 'Oriana', 'Kuro', 'Female', 0, 0, 'Goddess', 75, '', ''),
(76, 'Pan', '', 'Male', 0, 0, 'God', 76, '', ''),
(77, 'Platon', '', 'Male', 0, 0, 'God', 77, '', ''),
(78, 'Porcius', '', 'Male', 0, 0, 'God', 78, '', ''),
(79, 'Quiantitianus', '', 'Male', 0, 0, 'Titan', 79, '', ''),
(80, 'Ra', '', 'Male', 0, 0, 'God', 80, '', ''),
(81, 'Saiya', '', 'Female', 0, 0, 'Goddess', 81, '', ''),
(82, 'Serena', 'Kuro', 'Female', 0, 0, 'Goddess', 82, '', ''),
(83, 'Sigurd', '', 'Male', 0, 0, 'God', 83, '', ''),
(84, 'Sophia', 'Black', 'Female', 0, 0, 'Goddess', 84, '', ''),
(85, 'Steinarr', '', 'Male', 0, 0, 'God', 85, '', ''),
(86, 'Tartarus', '', 'Male', 0, 0, 'God', 86, '', ''),
(87, 'Themis', '', 'Female', 0, 0, 'Goddess', 87, '', ''),
(88, 'Reaper', 'Black', 'Male', 0, 0, 'God', 88, '', ''),
(89, 'Typoon', '', 'Male', 0, 0, 'Monster', 89, '', ''),
(90, 'Audrey', 'Black', 'Female', 0, 0, 'Goddess', 90, '', ''),
(91, 'Uranus', '', 'Male', 0, 0, 'God', 91, '', ''),
(92, 'Veronika', '', 'Female', 0, 0, 'Goddess', 92, '', ''),
(93, 'Vibus', '', 'Male', 0, 0, 'God', 93, '', ''),
(94, 'Wagglington', 'White', 'Male', 0, 0, 'God', 94, '', ''),
(95, 'Zapyrps', '', 'Male', 0, 0, 'God', 95, '', ''),
(96, 'Yuki', '', 'Female', 0, 0, 'Monster', 96, '', ''),
(97, 'Ananke', '', 'Female', 0, 0, 'Primordial', 97, '', ''),
(98, 'Chaos', '', 'Male', 0, 0, 'Primordial', 98, '', ''),
(99, 'Nemocon', '', 'Male', 0, 0, 'Primordial', 99, '', ''),
(100, 'Nox', '', 'Female', 0, 0, 'Primordial', 100, '', ''),
(101, 'Nyx', '', 'Female', 0, 0, 'Primordial', 101, '', ''),
(102, 'Void', '', 'Other', 0, 0, 'Primordial', 102, '', ''),
(103, 'Phanes', '', 'Female', 0, 0, 'Primordial', 103, 'mother of primordials', ''),
(104, 'Izanami', 'Kuro', 'Female', 0, 0, 'Primordial', 104, 'Izanami is part Primordial on her mothers side, she is also part demon on her fathers side', ''),
(105, 'Abbadon', 'Kuro', 'Male', 0, 1, 'Demon', 105, '', ''),
(106, 'Amber', 'Black', 'Female', 18, 0, 'Demi-god', 106, 'while not a god Amber possesses an extremely fast healing ability', ''),
(107, 'Ashly', 'West', 'Female', 0, 0, 'mortal', 107, '', ''),
(108, 'Cake', 'Black', 'Female', 16, 0, 'Demi-god', 108, '', ''),
(109, 'Chris', 'Edwards', 'Male', 16, 0, 'Demi-god', 109, '', ''),
(110, 'Clara', '', 'Female', 0, 0, 'Mortal', 110, '', ''),
(111, 'Damien', '', 'Male', 0, 0, 'Mortal', 111, 'Delinquent ', ''),
(112, 'Grace', 'Richardson', 'Female', 15, 0, 'Demi-god', 112, '', ''),
(113, 'Jai', '', 'Male', 0, 0, 'Mortal', 113, '', ''),
(114, 'Jessie', '', 'Female', 17, 0, 'Demi-god', 114, '', ''),
(115, 'Joe', '', 'Male', 17, 0, 'Demi-god', 115, '', ''),
(116, 'Mark', 'Davis', 'Male', 18, 0, 'Demi-god', 116, '', ''),
(117, 'Moo', 'Power', 'Male', 0, 0, 'Mortal', 117, 'whilst he is a human he was given the gift of immortality, by the gods', ''),
(118, 'Raffy', '', 'Male', 7, 0, 'Mortal', 118, 'while he is human he has the rewrite ability since his mother was experimented on by the EDF (Earth Defence Force) ', ''),
(119, 'Walter', '', 'Male', 26, 1, 'Mortal', 119, '', ''),
(120, 'Zalmon', 'Black', 'Male', 18, 1, 'Mortal', 120, 'zalmon was originally a human but when he jumped into the void taking the primordial Void with him they fused making him immortal ', ''),
(121, 'Zoey', '', 'Female', 7, 0, 'Mortal', 121, '', ''),
(122, 'Ador', '', 'Female', 0, 1, 'Giant', 122, '', ''),
(123, 'Aregrog', '', 'Female', 0, 1, 'Giant', 123, '', ''),
(124, 'Arisal', '', 'Male', 0, 1, 'Giant', 124, '', ''),
(125, 'Aruzsal', '', 'Male', 0, 1, 'Giant', 125, '', ''),
(126, 'Atag', '', 'Female', 0, 1, 'Giant', 126, '', ''),
(127, 'Balor', '', 'Female', 0, 1, 'Giant', 127, '', ''),
(128, 'Banba', '', 'Female', 0, 1, 'Giant', 128, '', ''),
(129, 'Benar', '', 'Female', 0, 1, 'Giant', 129, '', ''),
(130, 'Blaroch', '', 'Female', 0, 1, 'Giant', 130, '', ''),
(131, 'Bres', '', 'Male', 0, 1, 'Giant', 131, '', ''),
(132, 'Cracsor', '', 'Male', 0, 1, 'Giant', 132, '', ''),
(133, 'Dleblor', '', 'Male', 0, 1, 'Giant', 133, '', ''),
(134, 'Dlecfur', '', 'Male', 0, 1, 'Giant', 134, '', ''),
(135, 'Dlitziar', '', 'Female', 0, 1, 'Giant', 135, '', ''),
(136, 'Dlolziar', '', 'Male', 0, 1, 'Giant', 136, '', ''),
(137, 'Frokos', '', 'Male', 0, 1, 'Giant', 137, '', ''),
(138, 'Giknus', '', 'Male', 0, 1, 'Giant', 138, '', ''),
(139, 'Gladius', '', 'Male', 0, 1, 'Giant', 139, '', ''),
(140, 'Glunas', '', 'Male', 0, 1, 'Giant', 140, '', ''),
(141, 'Grudius', '', 'Female', 0, 1, 'Giant', 141, '', ''),
(142, 'Hewdhor', '', 'Female', 0, 1, 'Giant', 142, '', ''),
(143, 'Hilith', '', 'Male', 0, 1, 'Giant', 143, '', ''),
(144, 'Iddus', '', 'Female', 0, 1, 'Giant', 144, '', ''),
(145, 'Ixkaros', '', 'Male', 0, 1, 'Giant', 145, '', ''),
(146, 'Jesor', '', 'Male', 0, 1, 'Giant', 146, '', ''),
(147, 'Klibrog', '', 'Male', 0, 1, 'Giant', 147, '', ''),
(148, 'Krorvog', '', 'Female', 0, 1, 'Giant', 148, '', ''),
(149, 'Kufsar', '', 'Male', 0, 1, 'Giant', 149, '', ''),
(150, 'Lelrus', '', 'Female', 0, 1, 'Giant', 150, '', ''),
(151, 'Ludor', '', 'Male', 0, 1, 'Giant', 151, '', ''),
(152, 'Mirog', '', 'Male', 0, 1, 'Giant', 152, '', ''),
(153, 'Osmalog', '', 'Female', 0, 1, 'Giant', 153, '', ''),
(154, 'Salsog', '', 'Female', 0, 1, 'Giant', 154, '', ''),
(155, 'Sesas', '', 'Female', 0, 1, 'Giant', 155, '', ''),
(156, 'Surt', '', 'Male', 0, 1, 'Giant', 156, '', ''),
(157, 'Teklos', '', 'Female', 0, 1, 'Giant', 157, '', ''),
(158, 'Tennus', '', 'Male', 0, 1, 'Giant', 158, '', ''),
(159, 'Trelrog', '', 'Male', 0, 1, 'Giant', 159, '', ''),
(160, 'Trucrion', '', 'Male', 0, 1, 'Giant', 160, '', ''),
(161, 'Vlabarg', '', 'Male', 0, 1, 'Giant', 161, '', ''),
(162, 'Votsius', '', 'Male', 0, 1, 'Giant', 162, '', ''),
(163, 'Wraxthos', '', 'Female', 0, 1, 'Giant', 163, '', ''),
(164, 'Wrokaros', '', 'Female', 0, 1, 'Giant', 164, '', ''),
(165, 'Zilog', '', 'Female', 0, 1, 'Giant', 165, '', ''),
(166, 'Arlo', 'Kuro', 'Male', 0, 0, 'Demon', 166, '', ''),
(167, 'Caria', '', 'Female', 0, 0, 'Demon', 167, '', ''),
(168, 'Prometheus', '', 'Male', 0, 0, 'Titan', 168, '', ''),
(169, 'Winda', 'Kuro', 'Female', 4, 0, 'Goddess', 169, '', '');

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
(2, 'Succubus', 'Charm'),
(3, 'Destroyer', 'ReWrite');

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
(2, 'Killing Gods');
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
