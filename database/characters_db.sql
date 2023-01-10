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
(1, 'Adreanna', 'Black', 'Female', 22000, 2, 'Goddess', 1, NULL, NULL),
(2, 'Demon', 'Kuro', 'Male', 20000, 0, 'Demon', 2, NULL, NULL),
(3, 'Turitan', NULL, 'Male', 100000, 1, 'Giant', 3, NULL, NULL),
(4, 'Hachishaku-sama', NULL, 'Female', 100000, 0, 'Monster', 4, NULL, NULL),
(5, 'Spencer', NULL, 'Male', 30, 32, 'Mortal', 5, NULL, NULL),
(6, 'Isla', 'Kuro', 'Female', 900000, 2, 'Primordial', 6, NULL, NULL),
(7, 'Adrianna', 'Black', 'Female', 22000, 2, 'Goddess', NULL, '', ''),
(8, 'Adrynna', '', 'Female', 2147483647, 1, 'Goddess', NULL, '', ''),
(9, 'Aemilia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(10, 'Agni', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(11, 'Amaro', 'Kuro', 'Female', 0, 1, 'Goddess', NULL, '', ''),
(12, 'Amata', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(13, 'Ambrosia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(14, 'Angerona', '', 'Male', 0, 0, 'God', NULL, '', ''),
(15, 'Anyo', 'Kuro', 'Female', 6, 0, 'Goddess', NULL, '', ''),
(16, 'Apophis', '', 'Male', 0, 0, 'God', NULL, '', ''),
(17, 'Apostle', 'Jhoan', 'Male', 0, 0, 'God', NULL, '', ''),
(18, 'Argyros', '', 'Male', 0, 0, 'God', NULL, '', ''),
(19, 'Aurora', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(20, 'Basher-184', '', 'Male', 0, 0, 'God', NULL, '', ''),
(21, 'Bel-sarra-usur', '', 'Male', 0, 0, 'God', NULL, '', ''),
(22, 'Bratia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(23, 'Celia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(24, 'Charlotte', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(25, 'Chryses', '', 'Male', 0, 0, 'God', NULL, '', ''),
(26, 'DarkLight(Dacia)', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(27, 'DarkLord', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(28, 'Darkness', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(29, 'Ellis', '', 'Other', 0, 0, 'Goddess', NULL, '', ''),
(30, 'Enyo', 'Kuro', 'Female', 6, 0, 'Goddess', NULL, '', ''),
(31, 'Eogan', '', 'Male', 0, 0, 'God', NULL, '', ''),
(32, 'Fedelmid', '', 'Male', 0, 0, 'God', NULL, '', ''),
(33, 'Furia', '', 'Male', 0, 0, 'God', NULL, '', ''),
(34, 'Gaia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(35, 'Harriah', '', 'Male', 0, 0, 'God', NULL, '', ''),
(36, 'Harry', 'Black', 'Male', 10, 0, 'God', NULL, '', ''),
(37, 'Hel', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(38, 'Helia', 'Furia', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(39, 'Hrothulf', '', 'Male', 0, 0, 'God', NULL, '', ''),
(40, 'Ida', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(41, 'Issac', '', 'Male', 0, 0, 'God', NULL, '', ''),
(42, 'Itchia', '', 'Male', 0, 0, 'God', NULL, '', ''),
(43, 'Iucunda', '', 'Male', 0, 0, 'God', NULL, '', ''),
(44, 'Iunia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(45, 'Ivanke', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(46, 'Izanami', '', 'Male', 0, 0, 'God', NULL, '', ''),
(47, 'Jodocus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(48, 'Kai', '', 'Male', 0, 0, 'Demon', NULL, '', ''),
(49, 'Kali', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(50, 'Kamala', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(51, 'Kapono', '', 'Male', 0, 0, 'God', NULL, '', ''),
(52, 'Khione', 'White', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(53, 'King', 'Durian', 'Male', 0, 0, 'God', NULL, '', ''),
(54, 'Kronos', '', 'Male', 0, 0, 'Titan', NULL, '', ''),
(55, 'Kyna', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(56, 'Lai', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(57, 'Lalia', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(58, 'LightLord', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(59, 'Lightness', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(60, 'Lola', 'Rose', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(61, 'Lotto', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(62, 'Lucy', 'White', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(63, 'Lumi', 'Kuro', 'Female', 0, 0, 'Monster', NULL, '', ''),
(64, 'Luna', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(65, 'Lycurgus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(66, 'Maja', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(67, 'Malia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(68, 'Mathias', '', 'Male', 0, 0, 'God', NULL, '', ''),
(69, 'Mia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(70, 'Miya', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(71, 'Molly', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(72, 'Reya', '', 'Female', 0, 0, 'Titaness', NULL, '', ''),
(73, 'Nisha', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(74, 'Omaro', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(75, 'Oriana', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(76, 'Pan', '', 'Male', 0, 0, 'God', NULL, '', ''),
(77, 'Platon', '', 'Male', 0, 0, 'God', NULL, '', ''),
(78, 'Porcius', '', 'Male', 0, 0, 'God', NULL, '', ''),
(79, 'Quiantitianus', '', 'Male', 0, 0, 'Titan', NULL, '', ''),
(80, 'Ra', '', 'Male', 0, 0, 'God', NULL, '', ''),
(81, 'Saiya', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(82, 'Serena', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(83, 'Sigurd', '', 'Male', 0, 0, 'God', NULL, '', ''),
(84, 'Sophia', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(85, 'Steinarr', '', 'Male', 0, 0, 'God', NULL, '', ''),
(86, 'Tartarus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(87, 'Themis', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(88, 'Reaper', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(89, 'Typoon', '', 'Male', 0, 0, 'Monster', NULL, '', ''),
(90, 'Audrey', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(91, 'Uranus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(92, 'Veronika', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(93, 'Vibus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(94, 'Wagglington', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(95, 'Zapyrps', '', 'Male', 0, 0, 'God', NULL, '', ''),
(96, 'Yuki', '', 'Female', 0, 0, 'Monster', NULL, '', ''),
(97, 'Ananke', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(98, 'Chaos', '', 'Male', 0, 0, 'Primordial', NULL, '', ''),
(99, 'Nemocon', '', 'Male', 0, 0, 'Primordial', NULL, '', ''),
(100, 'Nox', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(101, 'Nyx', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(102, 'Void', '', 'Other', 0, 0, 'Primordial', NULL, '', ''),
(103, 'Phanes', '', 'Female', 0, 0, 'Primordial', NULL, 'mother of primordials', ''),
(104, 'Izanami', 'Kuro', 'Female', 0, 0, 'Primordial', NULL, 'Izanami is part Primordial on her mothers side, she is also part demon on her fathers side', ''),
(105, 'Abbadon', 'Kuro', 'Male', 0, 1, 'Demon', NULL, '', ''),
(106, 'Amber', 'Black', 'Female', 18, 0, 'Demi-god', NULL, 'while not a god Amber possesses an extremely fast healing ability', ''),
(107, 'Ashly', 'West', 'Female', 0, 0, 'mortal', NULL, '', ''),
(108, 'Cake', 'Black', 'Female', 16, 0, 'Demi-god', NULL, '', ''),
(109, 'Chris', 'Edwards', 'Male', 16, 0, 'Demi-god', NULL, '', ''),
(110, 'Clara', '', 'Female', 0, 0, 'Mortal', NULL, '', ''),
(111, 'Damien', '', 'Male', 0, 0, 'Mortal', NULL, 'Delinquent ', ''),
(112, 'Grace', 'Richardson', 'Female', 15, 0, 'Demi-god', NULL, '', ''),
(113, 'Jai', '', 'Male', 0, 0, 'Mortal', NULL, '', ''),
(114, 'Jessie', '', 'Female', 17, 0, 'Demi-god', NULL, '', ''),
(115, 'Joe', '', 'Male', 17, 0, 'Demi-god', NULL, '', ''),
(116, 'Mark', 'Davis', 'Male', 18, 0, 'Demi-god', NULL, '', ''),
(117, 'Moo', 'Power', 'Male', 0, 0, 'Mortal', NULL, 'whilst he is a human he was given the gift of immortality, by the gods', ''),
(118, 'Raffy', '', 'Male', 7, 0, 'Mortal', NULL, 'while he is human he has the rewrite ability since his mother was experimented on by the EDF (Earth Defence Force) ', ''),
(119, 'Walter', '', 'Male', 26, 1, 'Mortal', NULL, '', ''),
(120, 'Zalmon', 'Black', 'Male', 18, 1, 'Mortal', NULL, 'zalmon was originally a human but when he jumped into the void taking the primordial Void with him they fused making him immortal ', ''),
(121, 'Zoey', '', 'Female', 7, 0, 'Mortal', NULL, '', ''),
(123, 'Ador', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(124, 'Aregrog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(125, 'Arisal', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(126, 'Aruzsal', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(127, 'Atag', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(128, 'Balor', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(129, 'Banba', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(130, 'Benar', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(131, 'Blaroch', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(132, 'Bres', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(133, 'Cracsor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(134, 'Dleblor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(135, 'Dlecfur', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(136, 'Dlitziar', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(137, 'Dlolziar', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(138, 'Frokos', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(139, 'Giknus', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(140, 'Gladius', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(141, 'Glunas', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(142, 'Grudius', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(143, 'Hewdhor', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(144, 'Hilith', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(145, 'Iddus', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(146, 'Ixkaros', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(147, 'Jesor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(148, 'Klibrog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(149, 'Krorvog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(150, 'Kufsar', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(151, 'Lelrus', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(152, 'Ludor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(153, 'Mirog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(154, 'Osmalog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(155, 'Salsog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(156, 'Sesas', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(157, 'Surt', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(158, 'Teklos', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(159, 'Tennus', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(160, 'Trelrog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(161, 'Trucrion', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(162, 'Vlabarg', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(163, 'Votsius', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(164, 'Wraxthos', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(165, 'Wrokaros', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(166, 'Zilog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(167, 'Arlo', 'Kuro', 'Male', 0, 0, 'Demon', NULL, '', ''),
(168, 'Caria', '', 'Female', 0, 0, 'Demon', NULL, '', ''),
(169, 'Prometheus', '', 'Male', 0, 0, 'Titan', NULL, '', '');
(170, 'Winda', 'Kuro', 'Female', 4, 0, 'Goddess', NULL, '', '');

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
