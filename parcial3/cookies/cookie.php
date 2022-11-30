
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie</title>
</head>
<body>
    <?php
        if(isset($_COOKIE['ultimaVisita'])){
            printf("Su ultima visita fue: %s",$_COOKIE['ultimaVisita']);
            
            setcookie("ultimaVisita","Felipe Martinez cookie");
        }
        else{
            printf("No se encontro la cookie de ultima visita");
            
            setcookie("ultimaVisita","Felipe Martinez cookie");
        }
    ?>
</body>
</html>
