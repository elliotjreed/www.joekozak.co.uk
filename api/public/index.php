<?php

declare(strict_types=1);

use ElliotJReed\Exception\Form;
use ElliotJReed\ProcessForm;
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Dotenv\Dotenv;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    \header("Location: https://www.joekozak.co.uk");
    exit();
}

\header('Content-Type: application/json');

require __DIR__ . '/../vendor/autoload.php';

(new Dotenv())->load(__DIR__ . '/../.env');

try {
    echo \json_encode((new ProcessForm(new PHPMailer(true)))->process($_POST));
} catch (Form $exception) {
    echo \json_encode($exception->getMessage());
}
