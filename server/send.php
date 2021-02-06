<?php
/*
 * Это процедурный файл, который принимает данные формы
 * */

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");

    exit(0);
}



if (!isset($_POST["email"]) || !isset($_POST["message"])) {
    exit("Invalid data provided for this request!");
}

// Получить данные
$data = array(
    'email' => htmlspecialchars($_POST['email']),
    'message' => htmlspecialchars($_POST['message'])
);

// Если указан телефон, то добавить в массив
if (isset($_POST["phone"])) {
    $data['phone'] = htmlspecialchars($_POST['phone']);
}

// Если введен whatsapp, присоединить его к тексту сообщения и вывести текст на экран при успешной отправке
// текст выводится в функции js, беря ответ
if (isset($data['phone'])) {
    echo $data['message'] . " " . $data['phone'];
}
else {
    echo $data['message'];
}
