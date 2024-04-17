<?php
require_once 'functions.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$casa = new CasaCor();

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($casa->cadastrar($_POST)) {
            die(json_encode([
                'success' => true,
                'msg' => 'Adicionado com sucesso!'
            ]));
        } else {
            header('HTTP/1.1 405 Method Not Allowed');
            die(json_encode([
                'success' => false,
                'error' => 'Método não permitido.'
            ]));
        }
    } else {
        die(json_encode($casa->galeria()->fecharConexao()->jsonGaleria));
    }
} catch (Exception $exception) {
    die(json_encode([
        'success' => false,
        'msg' => 'Ocorreu um erro ao salvar:' . $exception
    ]));
}