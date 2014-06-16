-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.6.15-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para invent_mb
DROP DATABASE IF EXISTS `invent_mb`;
CREATE DATABASE IF NOT EXISTS `invent_mb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `invent_mb`;


-- Volcando estructura para tabla invent_mb.admin_redir
DROP TABLE IF EXISTS `admin_redir`;
CREATE TABLE IF NOT EXISTS `admin_redir` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `grupo` int(11) DEFAULT NULL,
  `name_sitio` varchar(200) DEFAULT NULL,
  `link_sitio` varchar(200) DEFAULT NULL,
  `img_sitio` varchar(200) DEFAULT NULL,
  `page` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Volcando datos para la tabla invent_mb.admin_redir: ~5 rows (aproximadamente)
DELETE FROM `admin_redir`;
/*!40000 ALTER TABLE `admin_redir` DISABLE KEYS */;
INSERT INTO `admin_redir` (`id`, `grupo`, `name_sitio`, `link_sitio`, `img_sitio`, `page`) VALUES
	(7, 1, 'Productos', 'clientes_mant.php', 'img/medica_admin.jpg', 'mant'),
	(8, 1, 'Clientes', 'clientes_mant.php', 'img/clientes_admin.jpg', 'mant'),
	(9, 1, 'Proveedores', 'page1', 'img/provee_admin.jpg', 'mant'),
	(10, 1, 'Unidades de medida', 'webapproot\\resources\\images\\logos\\favicon.ico', 'resources\\images\\logos\\Other\\wavemaker_62x62.png', 'mant'),
	(11, 1, 'Categorias de productos', 'catprod_mant.php', 'img/catgProdct_admin.jpg', 'mant'),
	(12, 1, 'lñjñljñjñ', 'ljñlhñjlñjñ', '{l{kñk{', '461641xdss');
/*!40000 ALTER TABLE `admin_redir` ENABLE KEYS */;


-- Volcando estructura para tabla invent_mb.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `prinombre` varchar(100) NOT NULL,
  `demasnombres` varchar(100) DEFAULT NULL,
  `priapellido` varchar(100) NOT NULL,
  `segapellido` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `rol` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `grupo` (`rol`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='tabla de usuarios del sistema';

-- Volcando datos para la tabla invent_mb.users: ~4 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `prinombre`, `demasnombres`, `priapellido`, `segapellido`, `username`, `password`, `cargo`, `rol`) VALUES
	(1, 'humberto', NULL, 'fierro', 'prieto', 'hfierro', '79879', 'admin', 1),
	(2, 'farma', 'cia', 'medi', 'biologica', 'farmacia', 'farma', 'Jefe de farmacia', 2),
	(3, 'almacen', 'general', 'medi', 'biologica', 'almacen', 'alma', 'jefe almacen general', 3),
	(4, 'Edgar', 'Humberto ', 'Lopez', NULL, 'Elopez', '12345', 'Gerente general', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
