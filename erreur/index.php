<?php 
if (isset($_GET["erreur"]))
	$erreur = htmlspecialchars($_GET["erreur"]);
else
	$erreur = "erreur inconnue";
?>
<!DOCTYPE html>
<html lang="fr">

	<head>
		<link rel="stylesheet" href="css/style.css" type="text/css">
		<!-- Car on aime JPC ... on aime VRAIMENT Jean Pierre Coffe -->	
		<title> BoeufCorp </title>  													
		<meta charset="UTF-8">
	</head>

	<body>
	<div id="particles-js"></div>
		<main>
			<h1><?php echo $erreur; ?></h1>
			<h2>Oops, perdu vous êtes...</h2>
			<h3>Retournez au vaisseau</h3>
		</main>
		<img id="cur" class="rotating" src="img/chameau.png">
		<div class="cercle"></div>
		<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
		<script src="js/chameau.js"></script>
		<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
		<script src="js/index.js"></script>
	</body>
	
</html>