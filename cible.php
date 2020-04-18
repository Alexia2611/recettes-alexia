<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Envoie d'un message par formulaire</title>
</head>

<body>
	<?php
	$retour = mail('alexiaphilip2611@gmail.com', 'Envoi depuis la page Formulaire', $_POST['message'], 'From : https://alexia2611.github.io/recettes-alexia/');
	if ($retour) 
	{
		echo '<p> Le message a bien été envoyé ! </p>';
	}	
	?>
</body>
</html>