<!DOCTYPE html>
<html lang="en">
<?php
    session_start();
    if(isset($_SESSION['user'])){
        header('Location: ./login.php');
    }


?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main page</title>
</head>

<body>
    <h1>Estas logueado!</h1>
</body>

</html>
