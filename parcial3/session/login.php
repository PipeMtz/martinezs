
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <form action="session.php" method="post">
        <label for="usuario" >Usuario:</label>
        <input type="text" name="user" placeholder="Escriba su usuario" >

        <label for="password" >Password:</label>
        <input type="password" name="password" placeholder="Escriba su password">
        
        <input type="submit" name="submit" id="" value="Iniciar sesion">
    </form>

</body>
</html>
