<!doctype html>
<html>
<head>
	<title>Raidcore</title>
	<meta charset="utf-8">
	<meta http-equiv="refresh" content="0; url=../" />
</head>
<body>
	<?php
		$file = "../data/tokens/" .$_POST["token"];
		file_put_contents($file, "");
	?>
</body>
</html>