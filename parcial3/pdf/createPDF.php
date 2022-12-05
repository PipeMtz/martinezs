<?php
require('./FPDF/fpdf.php');
$nombre = $_POST['nombre'];

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(40, 10, 'Hola mundo '. $nombre);
$pdf->Output();
?>