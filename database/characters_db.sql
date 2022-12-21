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
(11, 'Hachishaku-sama', NULL, 'Female', 100000, 0, 'Monster', 4, NULL, NULL),
(12, 'Spencer', NULL, 'Male', 30, 32, 'Mortal', 5, NULL, NULL),
(18, 'Isla', 'Kuro', 'Female', 900000, 2, 'Primordial', 6, NULL, NULL),
(37, 'Adrianna', 'Black', 'Female', 22000, 2, 'Goddess', NULL, '', ''),
(38, 'Adrynna', '', 'Female', 2147483647, 1, 'Goddess', NULL, '', ''),
(39, 'Aemilia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(40, 'Agni', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(41, 'Amaro', 'Kuro', 'Female', 0, 1, 'Goddess', NULL, '', ''),
(42, 'Amata', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(43, 'Ambrosia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(44, 'Angerona', '', 'Male', 0, 0, 'God', NULL, '', ''),
(45, 'Anyo', 'Kuro', 'Female', 6, 0, 'Goddess', NULL, '', ''),
(46, 'Apophis', '', 'Male', 0, 0, 'God', NULL, '', ''),
(47, 'Apostle', 'Jhoan', 'Male', 0, 0, 'God', NULL, '', ''),
(48, 'Argyros', '', 'Male', 0, 0, 'God', NULL, '', ''),
(49, 'Aurora', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(50, 'Basher-184', '', 'Male', 0, 0, 'God', NULL, '', ''),
(51, 'Bel-sarra-usur', '', 'Male', 0, 0, 'God', NULL, '', ''),
(52, 'Bratia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(53, 'Celia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(54, 'Charlotte', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(55, 'Chryses', '', 'Male', 0, 0, 'God', NULL, '', ''),
(56, 'DarkLight(Dacia)', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(57, 'DarkLord', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(58, 'Darkness', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(59, 'Ellis', '', 'Other', 0, 0, 'Goddess', NULL, '', ''),
(60, 'Enyo', 'Kuro', 'Female', 6, 0, 'Goddess', NULL, '', ''),
(61, 'Eogan', '', 'Male', 0, 0, 'God', NULL, '', ''),
(62, 'Fedelmid', '', 'Male', 0, 0, 'God', NULL, '', ''),
(63, 'Furia', '', 'Male', 0, 0, 'God', NULL, '', ''),
(64, 'Gaia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(65, 'Harriah', '', 'Male', 0, 0, 'God', NULL, '', ''),
(66, 'Harry', 'Black', 'Male', 10, 0, 'God', NULL, '', ''),
(67, 'Hel', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(68, 'Helia', 'Furia', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(69, 'Hrothulf', '', 'Male', 0, 0, 'God', NULL, '', ''),
(70, 'Ida', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(71, 'Issac', '', 'Male', 0, 0, 'God', NULL, '', ''),
(72, 'Itchia', '', 'Male', 0, 0, 'God', NULL, '', ''),
(73, 'Iucunda', '', 'Male', 0, 0, 'God', NULL, '', ''),
(74, 'Iunia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(75, 'Ivanke', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(76, 'Izanami', '', 'Male', 0, 0, 'God', NULL, '', ''),
(77, 'Jodocus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(78, 'Kai', '', 'Male', 0, 0, 'Demon', NULL, '', ''),
(79, 'Kali', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(80, 'Kamala', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(81, 'Kapono', '', 'Male', 0, 0, 'God', NULL, '', ''),
(82, 'Khione', 'White', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(83, 'King', 'Durian', 'Male', 0, 0, 'God', NULL, '', ''),
(84, 'Kronos', '', 'Male', 0, 0, 'Titan', NULL, '', ''),
(85, 'Kyna', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(86, 'Lai', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(87, 'Lalia', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(88, 'LightLord', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(89, 'Lightness', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(90, 'Lola', 'Rose', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(91, 'Lotto', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(92, 'Lucy', 'White', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(93, 'Lumi', 'Kuro', 'Female', 0, 0, 'Monster', NULL, '', ''),
(94, 'Luna', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(95, 'Lycurgus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(96, 'Maja', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(97, 'Malia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(98, 'Mathias', '', 'Male', 0, 0, 'God', NULL, '', ''),
(99, 'Mia', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(100, 'Miya', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(101, 'Molly', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(102, 'Reya', '', 'Female', 0, 0, 'Titaness', NULL, '', ''),
(103, 'Nisha', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(104, 'Omaro', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(105, 'Oriana', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(106, 'Pan', '', 'Male', 0, 0, 'God', NULL, '', ''),
(107, 'Platon', '', 'Male', 0, 0, 'God', NULL, '', ''),
(108, 'Porcius', '', 'Male', 0, 0, 'God', NULL, '', ''),
(109, 'Quiantitianus', '', 'Male', 0, 0, 'Titan', NULL, '', ''),
(110, 'Ra', '', 'Male', 0, 0, 'God', NULL, '', ''),
(111, 'Saiya', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(112, 'Serena', 'Kuro', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(113, 'Sigurd', '', 'Male', 0, 0, 'God', NULL, '', ''),
(114, 'Sophia', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(115, 'Steinarr', '', 'Male', 0, 0, 'God', NULL, '', ''),
(116, 'Tartarus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(117, 'Themis', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(118, 'Reaper', 'Black', 'Male', 0, 0, 'God', NULL, '', ''),
(119, 'Typoon', '', 'Male', 0, 0, 'Monster', NULL, '', ''),
(120, 'Audrey', 'Black', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(121, 'Uranus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(122, 'Veronika', '', 'Female', 0, 0, 'Goddess', NULL, '', ''),
(123, 'Vibus', '', 'Male', 0, 0, 'God', NULL, '', ''),
(124, 'Wagglington', 'White', 'Male', 0, 0, 'God', NULL, '', ''),
(125, 'Zapyrps', '', 'Male', 0, 0, 'God', NULL, '', ''),
(126, 'Yuki', '', 'Female', 0, 0, 'Monster', NULL, '', ''),
(127, 'Ananke', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(128, 'Chaos', '', 'Male', 0, 0, 'Primordial', NULL, '', ''),
(129, 'Nemocon', '', 'Male', 0, 0, 'Primordial', NULL, '', ''),
(130, 'Nox', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(131, 'Nyx', '', 'Female', 0, 0, 'Primordial', NULL, '', ''),
(132, 'Void', '', 'Other', 0, 0, 'Primordial', NULL, '', ''),
(133, 'Phanes', '', 'Female', 0, 0, 'Primordial', NULL, 'mother of primordials', ''),
(134, 'Izanami', 'Kuro', 'Female', 0, 0, 'Primordial', NULL, 'Izanami is part Primordial on her mothers side, she is also part demon on her fathers side', ''),
(135, 'Abbadon', 'Kuro', 'Male', 0, 1, 'Demon', NULL, '', ''),
(136, 'Amber', 'Black', 'Female', 18, 0, 'Demi-god', NULL, 'while not a god Amber possesses an extremely fast healing ability', ''),
(137, 'Ashly', 'West', 'Female', 0, 0, 'mortal', NULL, '', ''),
(138, 'Cake', 'Black', 'Female', 16, 0, 'Demi-god', NULL, '', ''),
(139, 'Chris', 'Edwards', 'Male', 16, 0, 'Demi-god', NULL, '', ''),
(140, 'Clara', '', 'Female', 0, 0, 'Mortal', NULL, '', ''),
(141, 'Damien', '', 'Male', 0, 0, 'Mortal', NULL, 'Delinquent ', ''),
(142, 'Grace', 'Richardson', 'Female', 15, 0, 'Demi-god', NULL, '', ''),
(143, 'Jai', '', 'Male', 0, 0, 'Mortal', NULL, '', ''),
(144, 'Jessie', '', 'Female', 17, 0, 'Demi-god', NULL, '', ''),
(145, 'Joe', '', 'Male', 17, 0, 'Demi-god', NULL, '', ''),
(146, 'Mark', 'Davis', 'Male', 18, 0, 'Demi-god', NULL, '', ''),
(147, 'Moo', 'Power', 'Male', 0, 0, 'Mortal', NULL, 'whilst he is a human he was given the gift of immortality, by the gods', ''),
(148, 'Raffy', '', 'Male', 7, 0, 'Mortal', NULL, 'while he is human he has the rewrite ability since his mother was experimented on by the EDF (Earth Defence Force) ', ''),
(149, 'Walter', '', 'Male', 26, 1, 'Mortal', NULL, '', ''),
(150, 'Zalmon', 'Black', 'Male', 18, 1, 'Mortal', NULL, 'zalmon was originally a human but when he jumped into the void taking the primordial Void with him they fused making him immortal ', ''),
(151, 'Zoey', '', 'Female', 7, 0, 'Mortal', NULL, '', ''),
(153, 'Ador', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(154, 'Aregrog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(155, 'Arisal', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(156, 'Aruzsal', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(157, 'Atag', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(158, 'Balor', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(159, 'Banba', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(160, 'Benar', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(161, 'Blaroch', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(162, 'Bres', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(163, 'Cracsor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(164, 'Dleblor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(165, 'Dlecfur', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(166, 'Dlitziar', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(167, 'Dlolziar', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(168, 'Frokos', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(169, 'Giknus', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(170, 'Gladius', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(171, 'Glunas', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(172, 'Grudius', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(173, 'Hewdhor', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(174, 'Hilith', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(175, 'Iddus', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(176, 'Ixkaros', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(177, 'Jesor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(178, 'Klibrog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(179, 'Krorvog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(180, 'Kufsar', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(181, 'Lelrus', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(182, 'Ludor', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(183, 'Mirog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(184, 'Osmalog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(185, 'Salsog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(186, 'Sesas', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(187, 'Surt', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(188, 'Teklos', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(189, 'Tennus', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(190, 'Trelrog', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(191, 'Trucrion', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(192, 'Vlabarg', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(193, 'Votsius', '', 'Male', 0, 1, 'Giant', NULL, '', ''),
(194, 'Wraxthos', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(195, 'Wrokaros', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(196, 'Zilog', '', 'Female', 0, 1, 'Giant', NULL, '', ''),
(197, 'Arlo', 'Kuro', 'Male', 0, 0, 'Demon', NULL, '', ''),
(200, 'Caria', '', 'Female', 0, 0, 'Demon', NULL, '', ''),
(201, 'Prometheus', '', 'Male', 0, 0, 'Titan', NULL, '', '');

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
