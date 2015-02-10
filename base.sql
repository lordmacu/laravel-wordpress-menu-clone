-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.17 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para base
DROP DATABASE IF EXISTS `base`;
CREATE DATABASE IF NOT EXISTS `base` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `base`;


-- Volcando estructura para tabla base.menus
DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `parent` varchar(255) NOT NULL DEFAULT '0',
  `sort` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL,
  `class` varchar(50) DEFAULT NULL,
  `menu` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla base.menus: ~62 rows (aproximadamente)
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
REPLACE INTO `menus` (`id`, `label`, `link`, `parent`, `sort`, `created_at`, `updated_at`, `class`, `menu`) VALUES
	(215, 'Inspiration', '', '221', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', 'submenumega col-md-2', 1),
	(216, 'White Papers', '/white-paper', '215', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(217, 'Infographics', '/infographics', '215', '2', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(218, 'Case Studies', '/case-studies', '215', '3', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(219, 'Brochures', '/Brochures', '215', '4', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(220, 'Installations', '/installations', '215', '5', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(221, 'Design Resources', '', '0', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', 'sf-megas megamenu', 1),
	(222, 'Markets', '', '221', '2', '2015-02-10 15:40:41', '2015-02-10 15:40:41', 'submenumega col-md-3', 1),
	(223, 'Senior Living', '/senior-living', '222', '3', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(224, 'Country Clubs', '/renovating-your-country-club', '222', '2', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(225, 'Banquet Rooms', '/banquet-chair-manufacturer', '222', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(226, 'Hotel Lobbies', '/hotel-lobby-design', '222', '4', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(227, 'Plan & Specify', '', '221', '3', '2015-02-10 15:40:41', '2015-02-10 15:40:41', 'submenumega col-md-3', 1),
	(228, 'Banquet Chairs', '/why-should-you-choose-shelby-williams-banquet-chairs', '227', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(229, 'Counter & Bar Height', '/bar-seating', '227', '3', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(230, 'Product Highlight Videos', '/product-videos', '227', '2', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(231, 'Upholstery', '', '221', '4', '2015-02-10 15:40:41', '2015-02-10 15:40:41', 'submenumega col-md-2', 1),
	(232, 'SW Fabrics', 'javascript:getSampleCatalog(1)', '231', '1', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(233, 'SW Vinyls', 'javascript:getSampleCatalog(3)', '231', '2', '2015-02-10 15:40:41', '2015-02-10 15:40:41', '', 1),
	(234, 'CF Stinson', 'http://select.cfstinson.com/Finishes/SampleRoom.jsp?lid=2525', '231', '3', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(235, 'Momentum', 'https://www.themomgroup.com/momentum_textiles.shtml', '231', '4', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(236, 'Finishes', '', '221', '5', '2015-02-10 15:40:42', '2015-02-10 15:40:42', 'submenumega col-md-2', 1),
	(237, 'Metal', 'javascript:getSampleCatalog(9)', '236', '1', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(238, 'Wood', 'javascript:getSampleCatalog(10)', '236', '2', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(239, 'Surfaces', 'javascript:getSampleCatalog(25)', '236', '3', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(240, 'Table Edges', 'javascript:getSampleCatalog(30)', '236', '4', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(241, 'Products', '', '0', '2', '2015-02-10 15:40:42', '2015-02-10 15:40:42', 'sf-megas megamenu', 1),
	(242, 'New Products', '', '241', '1', '2015-02-10 15:40:42', '2015-02-10 15:40:42', 'submenumega col-md-3', 1),
	(243, 'HDExpo 2014', '/collection/hdexpo-2014/', '242', '1', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(244, 'Seating', '', '241', '2', '2015-02-10 15:40:42', '2015-02-10 15:40:42', 'submenumega col-md-3', 1),
	(245, 'Wood', '/category/wood-chairs', '244', '1', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(246, 'Metal', '/category/metal-chairs', '244', '2', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(247, 'Barstools', '/category/barstools', '244', '3', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(248, 'Task', '/category/task-chairs', '244', '4', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(249, 'Booths', '/category/booths-specialty-lounge', '244', '5', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(250, 'Upholstered', '/category/upholstered', '244', '6', '2015-02-10 15:40:42', '2015-02-10 15:40:42', '', 1),
	(251, 'Banquet', '', '241', '3', '2015-02-10 15:40:42', '2015-02-10 15:40:42', 'submenumega col-md-3', 1),
	(252, 'All Banquet Chairs', '/category/metal-banquet-chairs', '251', '1', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(253, 'Couture de Light', '/collection/couture-de-light', '251', '2', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(254, 'Comfort de Luxe', '/collection/comfort-de-luxe', '251', '3', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(255, 'Original Collection', '/collection/original-collection', '251', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(256, 'Banquet Tables', '/category/banquet-tables', '251', '5', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(257, 'Tables', '', '241', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', 'submenumega col-md-3', 1),
	(258, 'Cafe Tables', '/category/cafe-tables', '257', '1', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(259, 'Table Bases', '/category/bases', '257', '2', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(260, 'Table Tops', '/category/tops', '257', '3', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(261, 'Occasional', '/category/occasional-tables', '257', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(262, 'Community & Meeting', '/category/community-and-meeting-tables', '257', '5', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(263, 'Replacement Parts', '/products/replacement-parts', '257', '6', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(264, 'Brochures', '/documents', '0', '3', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(265, 'Our Company', '/overview', '0', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(266, 'Overview', '/overview', '265', '1', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(267, 'Sustainability', '/environment', '265', '2', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(268, 'News & Events', '/blog/', '265', '3', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(269, 'Care & Maintenance ', '/files/docs/care-and-maintenance.pdf', '265', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(270, 'Terms & Conditions ', '/files/docs/shelby-williams-terms-and-conditions.pdf', '265', '5', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(271, 'Warranty', '/files/docs/warranty.pdf', '265', '6', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(272, 'Contact Us', '', '0', '5', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(273, 'COM Ship To', '/contact/', '272', '1', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(274, 'Submit Order / Contact Us', '/contact/', '272', '2', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(275, 'Find Your Rep', '/contact/', '272', '3', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1),
	(276, 'Request Finish Sample', '/contact/', '272', '4', '2015-02-10 15:40:43', '2015-02-10 15:40:43', '', 1);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
