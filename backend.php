<?php
// Start the session
session_start();

// Include the database connection file
include_once "db_connection.php";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['loginForm'])) {
        // Handle login form submission
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Perform validation and authentication here
        // Dummy example:
        if ($username === "admin" && $password === "password") {
            $_SESSION['username'] = $username;
            header("Location: index.php"); // Redirect to coursse_reg page after successful login
            exit();
        } else {
            $loginError = "Invalid username or password";
        }
    } elseif (isset($_POST['registrationForm'])) {
        // Handle registration form submission
    }
}

// Check if the user is already logged in
if (isset($_SESSION['username'])) {
    // Redirect to index page if already logged in
    header("Location: index.php");
    exit();
}

// Include the database connection file
include_once "db_connection.php";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $faculty = $_POST['faculty'];
    $department = $_POST['department'];
    $level = $_POST['level'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $amount = $_POST['amount'];

    // Prepare and bind the SQL statement
    $stmt = $mysqli->prepare("INSERT INTO registrations (firstname, lastname, faculty, department, level, email, phone_number, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssisid", $firstname, $lastname, $faculty, $department, $level, $email, $phone_number, $amount);

    // Execute the statement
    if ($stmt->execute()) {
        // Registration successful
        echo "Registration successful!";
    } else {
        // Registration failed
        echo "Error: " . $mysqli->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$mysqli->close();
?>
