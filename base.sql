-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 18, 2015 at 08:33 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `base`
--

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
`id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `parent` varchar(255) NOT NULL DEFAULT '0',
  `sort` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `class` varchar(50) DEFAULT NULL,
  `menu` int(11) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `label`, `link`, `parent`, `sort`, `created_at`, `updated_at`, `class`, `menu`) VALUES
(215, 'Inspiration', '', '221', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-2', 1),
(216, 'White Papers', '/white-paper', '215', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(217, 'Infographics', '/infographics', '215', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(218, 'Case Studies', '/case-studies', '215', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(219, 'Brochures', '/Brochures', '215', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(220, 'Installations', '/installations', '215', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(221, 'Design Resources', '', '0', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'sf-megas megamenu', 1),
(222, 'Markets', '', '221', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(223, 'Senior Living', '/senior-living', '222', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(224, 'Country Clubs', '/renovating-your-country-club', '222', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(225, 'Banquet Rooms', '/banquet-chair-manufacturer', '222', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(226, 'Hotel Lobbies', '/hotel-lobby-design', '222', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(227, 'Plan & Specify', '', '221', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(228, 'Banquet Chairs', '/why-should-you-choose-shelby-williams-banquet-chairs', '227', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(229, 'Counter & Bar Height', '/bar-seating', '227', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(230, 'Product Highlight Videos', '/product-videos', '227', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(231, 'Upholstery', '', '221', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-2', 1),
(232, 'SW Fabrics', 'javascript:getSampleCatalog(1)', '231', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(233, 'SW Vinyls', 'javascript:getSampleCatalog(3)', '231', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(234, 'CF Stinson', 'http://select.cfstinson.com/Finishes/SampleRoom.jsp?lid=2525', '231', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(235, 'Momentum', 'https://www.themomgroup.com/momentum_textiles.shtml', '231', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(236, 'Finishes', '', '221', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-2', 1),
(237, 'Metal', 'javascript:getSampleCatalog(9)', '236', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(238, 'Wood', 'javascript:getSampleCatalog(10)', '236', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(239, 'Surfaces', 'javascript:getSampleCatalog(25)', '236', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(240, 'Table Edges', 'javascript:getSampleCatalog(30)', '236', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(241, 'Products', '', '0', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'sf-megas megamenu', 1),
(242, 'New Products', '', '241', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(243, 'HDExpo 2014', '/collection/hdexpo-2014/', '242', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(244, 'Seating', '', '241', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(245, 'Wood', '/category/wood-chairs', '244', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(246, 'Metal', '/category/metal-chairs', '244', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(247, 'Barstools', '/category/barstools', '244', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(248, 'Task', '/category/task-chairs', '244', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(249, 'Booths', '/category/booths-specialty-lounge', '244', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(250, 'Upholstered', '/category/upholstered', '244', '6', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(251, 'Banquet', '', '241', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(252, 'All Banquet Chairs', '/category/metal-banquet-chairs', '251', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(253, 'Couture de Light', '/collection/couture-de-light', '251', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(254, 'Comfort de Luxe', '/collection/comfort-de-luxe', '251', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(255, 'Original Collection', '/collection/original-collection', '251', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(256, 'Banquet Tables', '/category/banquet-tables', '251', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(257, 'Tables', '', '241', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', 'submenumega col-md-3', 1),
(258, 'Cafe Tables', '/category/cafe-tables', '257', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(259, 'Table Bases', '/category/bases', '257', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(260, 'Table Tops', '/category/tops', '257', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(261, 'Occasional', '/category/occasional-tables', '257', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(262, 'Community & Meeting', '/category/community-and-meeting-tables', '257', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(263, 'Replacement Parts', '/products/replacement-parts', '257', '6', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(264, 'Brochures', '/documents', '0', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(265, 'Our Company', '/overview', '0', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(266, 'Overview', '/overview', '265', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(267, 'Sustainability', '/environment', '265', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(268, 'News & Events', '/blog/', '265', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(269, 'Care & Maintenance ', '/files/docs/care-and-maintenance.pdf', '265', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(270, 'Terms & Conditions ', '/files/docs/shelby-williams-terms-and-conditions.pdf', '265', '5', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(271, 'Warranty', '/files/docs/warranty.pdf', '265', '6', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(272, 'Contact Us', '', '0', '6', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(273, 'COM Ship To', '/contact/', '272', '1', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(274, 'Submit Order / Contact Us', '/contact/', '272', '2', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(275, 'Find Your Rep', '/contact/', '272', '3', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(276, 'Request Finish Sample', '/contact/', '272', '4', '2015-02-13 23:56:27', '2015-02-13 23:56:27', '', 1),
(278, 'asdf', 'sadf', '251', '0', '2015-02-19 00:25:26', '2015-02-19 00:25:26', 'asf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE `widgets` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `widgets`
--

INSERT INTO `widgets` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(2, 'asdf', '<p>sadfsdf</p>\r\n', '2015-02-18 22:37:49', '2015-02-18 22:37:49'),
(3, 'asdf', '<p>sadfsdf</p>\r\n', '2015-02-18 22:38:23', '2015-02-18 22:38:23'),
(4, 'asdf', '<p>s</p>\r\n', '2015-02-18 22:38:32', '2015-02-18 22:38:32'),
(5, 'Ssd', '<p>df</p>\r\n', '2015-02-18 22:39:01', '2015-02-18 22:39:01'),
(6, 'Primer widget tres', '<p>este es el texto del widget</p>\r\n', '2015-02-19 00:09:37', '2015-02-19 00:15:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `widgets`
--
ALTER TABLE `widgets`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=280;
--
-- AUTO_INCREMENT for table `widgets`
--
ALTER TABLE `widgets`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;