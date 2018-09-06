-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Sep 06, 2018 at 04:21 PM
-- Server version: 10.3.9-MariaDB-1:10.3.9+maria~bionic
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inochi`
--

-- --------------------------------------------------------

--
-- Table structure for table `TB_BILLING_TYPE`
--

CREATE TABLE `TB_BILLING_TYPE` (
  `S_ID` int(11) NOT NULL,
  `S_NAME` varchar(100) NOT NULL,
  `S_STATE` varchar(10) NOT NULL,
  `D_CREATE` datetime NOT NULL DEFAULT current_timestamp(),
  `D_UPDATE` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TB_BILLING_TYPE`
--

INSERT INTO `TB_BILLING_TYPE` (`S_ID`, `S_NAME`, `S_STATE`, `D_CREATE`, `D_UPDATE`) VALUES
(1, 'Tiền điện', 'approved', '2018-09-06 16:10:24', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TB_BILLING_TYPE`
--
ALTER TABLE `TB_BILLING_TYPE`
  ADD PRIMARY KEY (`S_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `TB_BILLING_TYPE`
--
ALTER TABLE `TB_BILLING_TYPE`
  MODIFY `S_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
