<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    // Check if email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "info@bhp-sgw.com";
        
        // Create headers with the message
        $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion() . "\r\n" .
            "Content-type: text/html; charset=iso-8859-1\r\n"; // Specify HTML content type
        
        $email_body = "Name: $name <br>Email: $email <br>Phone: $phone <br>Message: $message";

        // Send the email
        if (mail($to, "Wiadomosc z formularza kontaktowego od $name", $email_body, $headers)) {
            echo "Email został wysłany do BHP-SGW!";
        } else {
            echo "Wystąpił błąd. Email nie został wysłany.";
        }
    } else {
        echo "Wystąpił błąd. Niepoprawny adres email.";
    }
}



?>



