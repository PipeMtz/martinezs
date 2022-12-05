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
    if (isset($_COOKIE['ultimaVisita'])) {
        printf("Su ultima visita fue: %s", $_COOKIE['ultimaVisita']);
        $fechaHoy = date('Y/m/d H:i:s');
        setcookie("ultimaVisita", "Felipe Martinez cookie, fecha: $fechaHoy");
    } else {
        printf("No se encontro la cookie de ultima visita");
        $fechaHoy = date('Y/m/d H:i:s');
        $sigSemana = time() + (7 * 24 * 60 * 60);
        $fechaExp = date('Y/m/d H:i:s', $sigSemana) + "<br>";
        echo '<b>Fecha de creacion de cookie:</b>', $fechaHoy, '<br>';
        echo '<b>Fecha de vencimiento de cookie:</b>', $fechaExp, '<br>';
        setcookie("ultimaVisita", "Felipe Martinez cookie, fecha: $fechaHoy");
    }
    ?>
</body>

</html>
