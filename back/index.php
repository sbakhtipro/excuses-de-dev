<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");

require_once('ExportExcuse.php');
require_once('InsertExcuse.php');

if (!isset($_GET)) {
    header('Location:/');
    exit();
}

if ($_GET['action'] == 'get-excuse') {
    $exportExcuse = new ExportExcuse();
    if (isset($_GET['actualExcuse'])) {
        $exportExcuse->setActualExcuse($_GET['actualExcuse']);
    }
    $exportExcuse->export();
}

if ($_GET['action'] === 'insert-excuse') {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['insert-excuse']) && !empty($_POST['tag-input'])) {
        $importExcuse = new InsertExcuse();
        $importExcuse->insert($_POST['insert-excuse'], $_POST['tag-input']);
    }
}