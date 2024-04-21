<?php
// Database credentials
$host = "localhost";
$username = "root";
$password = "m#P52s@apV0D263hsHDJafffKDKWSI";
$database = "student_db";

// Create connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
