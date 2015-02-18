-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 18, 2015 at 09:04 PM
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

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'menu principal', '2015-02-18 19:58:05', '0000-00-00 00:00:00');

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
(215, 'Inspiration', '', '221', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-2', 1),
(216, 'White Papers', '/white-paper', '215', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(217, 'Infographics', '/infographics', '215', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(218, 'Case Studies', '/case-studies', '215', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(219, 'Brochures', '/Brochures', '215', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(220, 'Installations', '/installations', '215', '5', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(221, 'Design Resources', '', '0', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'sf-megas megamenu', 1),
(222, 'Markets', '', '221', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(223, 'Senior Living', '/senior-living', '222', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(224, 'Country Clubs', '/renovating-your-country-club', '222', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(225, 'Banquet Rooms', '/banquet-chair-manufacturer', '222', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(226, 'Hotel Lobbies', '/hotel-lobby-design', '222', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(227, 'Plan & Specify', '', '221', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(228, 'Banquet Chairs', '/why-should-you-choose-shelby-williams-banquet-chairs', '227', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(229, 'Counter & Bar Height', '/bar-seating', '227', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(230, 'Product Highlight Videos', '/product-videos', '227', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(231, 'Upholstery', '', '221', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-2', 1),
(232, 'SW Fabrics', 'javascript:getSampleCatalog(1)', '231', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(233, 'SW Vinyls', 'javascript:getSampleCatalog(3)', '231', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(234, 'CF Stinson', 'http://select.cfstinson.com/Finishes/SampleRoom.jsp?lid=2525', '231', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(235, 'Momentum', 'https://www.themomgroup.com/momentum_textiles.shtml', '231', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(236, 'Finishes', '', '221', '5', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-2', 1),
(237, 'Metal', 'javascript:getSampleCatalog(9)', '236', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(238, 'Wood', 'javascript:getSampleCatalog(10)', '236', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(239, 'Surfaces', 'javascript:getSampleCatalog(25)', '236', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(240, 'Table Edges', 'javascript:getSampleCatalog(30)', '236', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(241, 'Products', '', '0', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'sf-megas megamenu', 1),
(242, 'New Products', '', '241', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(243, 'HDExpo 2014', '/collection/hdexpo-2014/', '242', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(244, 'Seating', '', '241', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(245, 'Wood', '/category/wood-chairs', '244', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(246, 'Metal', '/category/metal-chairs', '244', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(247, 'Barstools', '/category/barstools', '244', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(248, 'Task', '/category/task-chairs', '244', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(249, 'Booths', '/category/booths-specialty-lounge', '244', '5', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(250, 'Upholstered', '/category/upholstered', '244', '6', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(251, 'Banquet', '', '241', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(252, 'All Banquet Chairs', '/category/metal-banquet-chairs', '251', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(253, 'Couture de Light', '/collection/couture-de-light', '251', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(254, 'Comfort de Luxe', '/collection/comfort-de-luxe', '251', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(255, 'Original Collection', '/collection/original-collection', '251', '5', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(256, 'Banquet Tables', '/category/banquet-tables', '251', '6', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(257, 'Tables', '', '241', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'submenumega col-md-3', 1),
(258, 'Cafe Tables', '/category/cafe-tables', '257', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(259, 'Table Bases', '/category/bases', '257', '2', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(260, 'Table Tops', '/category/tops', '257', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(261, 'Occasional', '/category/occasional-tables', '257', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(262, 'Community & Meeting', '/category/community-and-meeting-tables', '257', '5', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(263, 'Replacement Parts', '/products/replacement-parts', '257', '6', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(264, 'Brochures', '/documents', '0', '3', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(265, 'Our Company', '/overview', '0', '4', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(266, 'Overview', '/overview', '265', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', '', 1),
(267, 'Sustainability', '/environment', '265', '2', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(268, 'News & Events', '/blog/', '265', '3', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(269, 'Care & Maintenance ', '/files/docs/care-and-maintenance.pdf', '265', '4', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(270, 'Terms & Conditions ', '/files/docs/shelby-williams-terms-and-conditions.pdf', '265', '5', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(271, 'Warranty', '/files/docs/warranty.pdf', '265', '6', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(272, 'Contact Us', '', '0', '5', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(273, 'COM Ship To', '/contact/', '272', '1', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(274, 'Submit Order / Contact Us', '/contact/', '272', '2', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(275, 'Find Your Rep', '/contact/', '272', '3', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(276, 'Request Finish Sample', '/contact/', '272', '4', '2015-02-19 00:58:24', '2015-02-19 00:58:24', '', 1),
(278, 'asdf', 'sadf', '251', '1', '2015-02-19 00:58:23', '2015-02-19 00:58:23', 'asf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE `widgets` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `type` int(11) NOT NULL,
  `id_component` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `widgets`
--

INSERT INTO `widgets` (`id`, `name`, `description`, `created_at`, `updated_at`, `type`, `id_component`) VALUES
(2, 'asdf', '<p>sadfsdf</p>\r\n', '2015-02-18 22:37:49', '2015-02-18 22:37:49', 0, 0),
(3, 'asdf', '<p>sadfsdf</p>\r\n', '2015-02-18 22:38:23', '2015-02-18 22:38:23', 0, 0),
(4, 'asdf', '<p>s</p>\r\n', '2015-02-18 22:38:32', '2015-02-18 22:38:32', 0, 0),
(5, 'Ssd', '<p>df</p>\r\n', '2015-02-18 22:39:01', '2015-02-18 22:39:01', 0, 0),
(6, 'Primer widget tres', '<p>este es el texto del widget</p>\r\n', '2015-02-19 00:09:37', '2015-02-19 00:15:40', 0, 0),
(9, 'menu principal', '<style>  .infolist{ display:block !important}</style><li id="menuitem_221"  data-class="sf-megas megamenu" data-sort="1" data-link=""  data-label="Design Resources" data-id="221"><a href="" class="sf-with-ul">Design Resources </a><div class="sf-mega"><div class="sf-mega-content"><div class="row"><ul ><style>  .infolist{ display:block !important}</style><div class="col-md-2"><li id="menuitem_215"  data-class="submenumega col-md-2" data-sort="1" data-link=""  data-label="Inspiration" data-id="215"><span>Inspiration </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_216"  data-class="" data-sort="1" data-link="/white-paper"  data-label="White Papers" data-id="216"><a href="/white-paper" class="sf-with-ul">White Papers </a></li><li id="menuitem_217"  data-class="" data-sort="2" data-link="/infographics"  data-label="Infographics" data-id="217"><a href="/infographics" class="sf-with-ul">Infographics </a></li><li id="menuitem_218"  data-class="" data-sort="3" data-link="/case-studies"  data-label="Case Studies" data-id="218"><a href="/case-studies" class="sf-with-ul">Case Studies </a></li><li id="menuitem_219"  data-class="" data-sort="4" data-link="/Brochures"  data-label="Brochures" data-id="219"><a href="/Brochures" class="sf-with-ul">Brochures </a></li><li id="menuitem_220"  data-class="" data-sort="5" data-link="/installations"  data-label="Installations" data-id="220"><a href="/installations" class="sf-with-ul">Installations </a></li></ul></div></li><div class="col-md-3"><li id="menuitem_222"  data-class="submenumega col-md-3" data-sort="2" data-link=""  data-label="Markets" data-id="222"><span>Markets </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_225"  data-class="" data-sort="1" data-link="/banquet-chair-manufacturer"  data-label="Banquet Rooms" data-id="225"><a href="/banquet-chair-manufacturer" class="sf-with-ul">Banquet Rooms </a></li><li id="menuitem_224"  data-class="" data-sort="2" data-link="/renovating-your-country-club"  data-label="Country Clubs" data-id="224"><a href="/renovating-your-country-club" class="sf-with-ul">Country Clubs </a></li><li id="menuitem_223"  data-class="" data-sort="3" data-link="/senior-living"  data-label="Senior Living" data-id="223"><a href="/senior-living" class="sf-with-ul">Senior Living </a></li><li id="menuitem_226"  data-class="" data-sort="4" data-link="/hotel-lobby-design"  data-label="Hotel Lobbies" data-id="226"><a href="/hotel-lobby-design" class="sf-with-ul">Hotel Lobbies </a></li></ul></div></li><div class="col-md-3"><li id="menuitem_227"  data-class="submenumega col-md-3" data-sort="3" data-link=""  data-label="Plan & Specify" data-id="227"><span>Plan & Specify </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_228"  data-class="" data-sort="1" data-link="/why-should-you-choose-shelby-williams-banquet-chairs"  data-label="Banquet Chairs" data-id="228"><a href="/why-should-you-choose-shelby-williams-banquet-chairs" class="sf-with-ul">Banquet Chairs </a></li><li id="menuitem_230"  data-class="" data-sort="2" data-link="/product-videos"  data-label="Product Highlight Videos" data-id="230"><a href="/product-videos" class="sf-with-ul">Product Highlight Videos </a></li><li id="menuitem_229"  data-class="" data-sort="3" data-link="/bar-seating"  data-label="Counter & Bar Height" data-id="229"><a href="/bar-seating" class="sf-with-ul">Counter & Bar Height </a></li></ul></div></li><div class="col-md-2"><li id="menuitem_231"  data-class="submenumega col-md-2" data-sort="4" data-link=""  data-label="Upholstery" data-id="231"><span>Upholstery </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_232"  data-class="" data-sort="1" data-link="javascript:getSampleCatalog(1)"  data-label="SW Fabrics" data-id="232"><a href="javascript:getSampleCatalog(1)" class="sf-with-ul">SW Fabrics </a></li><li id="menuitem_233"  data-class="" data-sort="2" data-link="javascript:getSampleCatalog(3)"  data-label="SW Vinyls" data-id="233"><a href="javascript:getSampleCatalog(3)" class="sf-with-ul">SW Vinyls </a></li><li id="menuitem_234"  data-class="" data-sort="3" data-link="http://select.cfstinson.com/Finishes/SampleRoom.jsp?lid=2525"  data-label="CF Stinson" data-id="234"><a href="http://select.cfstinson.com/Finishes/SampleRoom.jsp?lid=2525" class="sf-with-ul">CF Stinson </a></li><li id="menuitem_235"  data-class="" data-sort="4" data-link="https://www.themomgroup.com/momentum_textiles.shtml"  data-label="Momentum" data-id="235"><a href="https://www.themomgroup.com/momentum_textiles.shtml" class="sf-with-ul">Momentum </a></li></ul></div></li><div class="col-md-2"><li id="menuitem_236"  data-class="submenumega col-md-2" data-sort="5" data-link=""  data-label="Finishes" data-id="236"><span>Finishes </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_237"  data-class="" data-sort="1" data-link="javascript:getSampleCatalog(9)"  data-label="Metal" data-id="237"><a href="javascript:getSampleCatalog(9)" class="sf-with-ul">Metal </a></li><li id="menuitem_238"  data-class="" data-sort="2" data-link="javascript:getSampleCatalog(10)"  data-label="Wood" data-id="238"><a href="javascript:getSampleCatalog(10)" class="sf-with-ul">Wood </a></li><li id="menuitem_239"  data-class="" data-sort="3" data-link="javascript:getSampleCatalog(25)"  data-label="Surfaces" data-id="239"><a href="javascript:getSampleCatalog(25)" class="sf-with-ul">Surfaces </a></li><li id="menuitem_240"  data-class="" data-sort="4" data-link="javascript:getSampleCatalog(30)"  data-label="Table Edges" data-id="240"><a href="javascript:getSampleCatalog(30)" class="sf-with-ul">Table Edges </a></li></ul></div></li></ul></div></div></div></li><li id="menuitem_241"  data-class="sf-megas megamenu" data-sort="2" data-link=""  data-label="Products" data-id="241"><a href="" class="sf-with-ul">Products </a><div class="sf-mega"><div class="sf-mega-content"><div class="row"><ul ><style>  .infolist{ display:block !important}</style><div class="col-md-3"><li id="menuitem_242"  data-class="submenumega col-md-3" data-sort="1" data-link=""  data-label="New Products" data-id="242"><span>New Products </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_243"  data-class="" data-sort="1" data-link="/collection/hdexpo-2014/"  data-label="HDExpo 2014" data-id="243"><a href="/collection/hdexpo-2014/" class="sf-with-ul">HDExpo 2014 </a></li></ul></div></li><div class="col-md-3"><li id="menuitem_244"  data-class="submenumega col-md-3" data-sort="2" data-link=""  data-label="Seating" data-id="244"><span>Seating </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_245"  data-class="" data-sort="1" data-link="/category/wood-chairs"  data-label="Wood" data-id="245"><a href="/category/wood-chairs" class="sf-with-ul">Wood </a></li><li id="menuitem_246"  data-class="" data-sort="2" data-link="/category/metal-chairs"  data-label="Metal" data-id="246"><a href="/category/metal-chairs" class="sf-with-ul">Metal </a></li><li id="menuitem_247"  data-class="" data-sort="3" data-link="/category/barstools"  data-label="Barstools" data-id="247"><a href="/category/barstools" class="sf-with-ul">Barstools </a></li><li id="menuitem_248"  data-class="" data-sort="4" data-link="/category/task-chairs"  data-label="Task" data-id="248"><a href="/category/task-chairs" class="sf-with-ul">Task </a></li><li id="menuitem_249"  data-class="" data-sort="5" data-link="/category/booths-specialty-lounge"  data-label="Booths" data-id="249"><a href="/category/booths-specialty-lounge" class="sf-with-ul">Booths </a></li><li id="menuitem_250"  data-class="" data-sort="6" data-link="/category/upholstered"  data-label="Upholstered" data-id="250"><a href="/category/upholstered" class="sf-with-ul">Upholstered </a></li></ul></div></li><div class="col-md-3"><li id="menuitem_251"  data-class="submenumega col-md-3" data-sort="3" data-link=""  data-label="Banquet" data-id="251"><span>Banquet </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_278"  data-class="asf" data-sort="1" data-link="sadf"  data-label="asdf" data-id="278"><a href="sadf" class="sf-with-ul">asdf </a></li><li id="menuitem_252"  data-class="" data-sort="2" data-link="/category/metal-banquet-chairs"  data-label="All Banquet Chairs" data-id="252"><a href="/category/metal-banquet-chairs" class="sf-with-ul">All Banquet Chairs </a></li><li id="menuitem_253"  data-class="" data-sort="3" data-link="/collection/couture-de-light"  data-label="Couture de Light" data-id="253"><a href="/collection/couture-de-light" class="sf-with-ul">Couture de Light </a></li><li id="menuitem_254"  data-class="" data-sort="4" data-link="/collection/comfort-de-luxe"  data-label="Comfort de Luxe" data-id="254"><a href="/collection/comfort-de-luxe" class="sf-with-ul">Comfort de Luxe </a></li><li id="menuitem_255"  data-class="" data-sort="5" data-link="/collection/original-collection"  data-label="Original Collection" data-id="255"><a href="/collection/original-collection" class="sf-with-ul">Original Collection </a></li><li id="menuitem_256"  data-class="" data-sort="6" data-link="/category/banquet-tables"  data-label="Banquet Tables" data-id="256"><a href="/category/banquet-tables" class="sf-with-ul">Banquet Tables </a></li></ul></div></li><div class="col-md-3"><li id="menuitem_257"  data-class="submenumega col-md-3" data-sort="4" data-link=""  data-label="Tables" data-id="257"><span>Tables </span><ul  class="infolist"><style>  .infolist{ display:block !important}</style><li id="menuitem_258"  data-class="" data-sort="1" data-link="/category/cafe-tables"  data-label="Cafe Tables" data-id="258"><a href="/category/cafe-tables" class="sf-with-ul">Cafe Tables </a></li><li id="menuitem_259"  data-class="" data-sort="2" data-link="/category/bases"  data-label="Table Bases" data-id="259"><a href="/category/bases" class="sf-with-ul">Table Bases </a></li><li id="menuitem_260"  data-class="" data-sort="3" data-link="/category/tops"  data-label="Table Tops" data-id="260"><a href="/category/tops" class="sf-with-ul">Table Tops </a></li><li id="menuitem_261"  data-class="" data-sort="4" data-link="/category/occasional-tables"  data-label="Occasional" data-id="261"><a href="/category/occasional-tables" class="sf-with-ul">Occasional </a></li><li id="menuitem_262"  data-class="" data-sort="5" data-link="/category/community-and-meeting-tables"  data-label="Community & Meeting" data-id="262"><a href="/category/community-and-meeting-tables" class="sf-with-ul">Community & Meeting </a></li><li id="menuitem_263"  data-class="" data-sort="6" data-link="/products/replacement-parts"  data-label="Replacement Parts" data-id="263"><a href="/products/replacement-parts" class="sf-with-ul">Replacement Parts </a></li></ul></div></li></ul></div></div></div></li><li id="menuitem_264"  data-class="" data-sort="3" data-link="/documents"  data-label="Brochures" data-id="264"><a href="/documents" class="sf-with-ul">Brochures </a></li><li id="menuitem_265"  data-class="" data-sort="4" data-link="/overview"  data-label="Our Company" data-id="265"><a href="/overview" class="sf-with-ul">Our Company </a><ul class="dd-list"><style>  .infolist{ display:block !important}</style><li id="menuitem_266"  data-class="" data-sort="1" data-link="/overview"  data-label="Overview" data-id="266"><a href="/overview" class="sf-with-ul">Overview </a></li><li id="menuitem_267"  data-class="" data-sort="2" data-link="/environment"  data-label="Sustainability" data-id="267"><a href="/environment" class="sf-with-ul">Sustainability </a></li><li id="menuitem_268"  data-class="" data-sort="3" data-link="/blog/"  data-label="News & Events" data-id="268"><a href="/blog/" class="sf-with-ul">News & Events </a></li><li id="menuitem_269"  data-class="" data-sort="4" data-link="/files/docs/care-and-maintenance.pdf"  data-label="Care & Maintenance " data-id="269"><a href="/files/docs/care-and-maintenance.pdf" class="sf-with-ul">Care & Maintenance  </a></li><li id="menuitem_270"  data-class="" data-sort="5" data-link="/files/docs/shelby-williams-terms-and-conditions.pdf"  data-label="Terms & Conditions " data-id="270"><a href="/files/docs/shelby-williams-terms-and-conditions.pdf" class="sf-with-ul">Terms & Conditions  </a></li><li id="menuitem_271"  data-class="" data-sort="6" data-link="/files/docs/warranty.pdf"  data-label="Warranty" data-id="271"><a href="/files/docs/warranty.pdf" class="sf-with-ul">Warranty </a></li></ul></li><li id="menuitem_272"  data-class="" data-sort="5" data-link=""  data-label="Contact Us" data-id="272"><a href="" class="sf-with-ul">Contact Us </a><ul class="dd-list"><style>  .infolist{ display:block !important}</style><li id="menuitem_273"  data-class="" data-sort="1" data-link="/contact/"  data-label="COM Ship To" data-id="273"><a href="/contact/" class="sf-with-ul">COM Ship To </a></li><li id="menuitem_274"  data-class="" data-sort="2" data-link="/contact/"  data-label="Submit Order / Contact Us" data-id="274"><a href="/contact/" class="sf-with-ul">Submit Order / Contact Us </a></li><li id="menuitem_275"  data-class="" data-sort="3" data-link="/contact/"  data-label="Find Your Rep" data-id="275"><a href="/contact/" class="sf-with-ul">Find Your Rep </a></li><li id="menuitem_276"  data-class="" data-sort="4" data-link="/contact/"  data-label="Request Finish Sample" data-id="276"><a href="/contact/" class="sf-with-ul">Request Finish Sample </a></li></ul></li>', '2015-02-19 01:03:16', '2015-02-19 01:03:16', 0, 1);

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;