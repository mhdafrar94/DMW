<?php
$servername = "localhost";
$username = "root";  // your MySQL username
$password = "";  // your MySQL password
$dbname = "user_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $id_type = $_POST['id_type'];
    $id_number = $_POST['id_number'];
    $phone = $_POST['phone'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash the password

    // Insert user into the database
    $sql = "INSERT INTO users (name, email, dob, id_type, id_number, phone, password) 
            VALUES ('$name', '$email', '$dob', '$id_type', '$id_number', '$phone', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
