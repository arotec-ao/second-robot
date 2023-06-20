-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Jun-2022 às 01:56
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bot`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `mensagem` mediumtext NOT NULL,
  `response` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `chatbot`
--

INSERT INTO `chatbot` (`id`, `mensagem`, `response`) VALUES
(1, 'bom dia, Boa Tarde, boa noite', 'Olá caríssimo, esperamos que esteja tudo bem consigo, em que podemos ajudar?'),
(2, 'cursos, saber mais, aulas', 'Bom, quanto aos cursos temos os seguintes cursos: <br> <ul><li>Robótica Módulo 1</li><li>Robótica Módulo 2</li><li>Robótica Módulo 1</li><li>Mecanica Industrial</li></ul><br> Estamos no bairro Palanca, junto ao Caiongo Gás. ou ainda pode conferir os cursos em <a href=\'https//www.arotech.org\'>www.arotech.org</a>. O que mais deseja, por favor?'),
(3, 'quem é voce, qual o seu nome, seu nom', 'Sou o AROBOT, prazer em conhecê lo.'),
(4, 'quem sou eu, sou eu', 'Não sei quem tu és, desculpa'),
(5, 'arobot', 'Sim pode escrever o que deseja!'),
(6, 'Joao, João, joão, joao, afonso, Afonso, Katombela', 'Sim meu criador, estou aqui para servi-lo! <br> como se sente hoje?'),
(7, 'estou bem, me sinto bem,estou bem e tu?, estou bem, e tu?, e tu?, e tu, e vc, e voce, e você bem, bm, obrigado', 'Que bom, fico feliz por isso! <br> Tenha um bom dia!'),
(8, 'Como está, Como estás, como estas, como estás, tudo bem, estás bem, como vai, tudo bem?', 'Estou bem obrigado, e tu! Como está hoje?'),
(9, 'oi, olá, ola, ', 'Olá como vai?'),
(10, 'hey, hello, hi', 'Hello dear, welcome to AROTEC!<br> How can i help you please?'),
(11, 'How are you?, how are you, how are u, are you ok, fine?, how are u?, how are you?', 'I\'m fine thanks, and you?'),
(12, 'i am fine, fine, fine thanks, i\'m well, very good, pretty good, thanks alot, i\'m doing great, doing great, i am ok', 'I\'m hapy to know that, wish you a great day'),
(13, 'about,about courses. the courses, how about the courses, abt, know abou, i\'d like to know about, courses, plans, plan, robotic, robotics', 'Ok, thanks for contact us, we\'d like to tell you that the class courses is open yet and we\'ve got 3 courses\' type or category wich is: <b>Robotic Module 1</b>, <b>Robotic Module 2</b>,and <b>Robotic Eletronic and Mechanic</b>');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
