<?php
// register.php
require 'vendor/autoload.php';
require 'config.php'; // Include the database configuration

$email = $_POST['email'];
$password = $_POST['password'];
$name = $_POST['name'];

error_log("Received email: $email");
error_log("Received name: $name");

// Input validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'fail', 'message' => 'Invalid email format']);
    error_log("Invalid email format: $email");
    exit;
}

if (strlen($password) < 6) {
    echo json_encode(['status' => 'fail', 'message' => 'Password must be at least 6 characters long']);
    error_log("Password too short");
    exit;
}

// Check if the email already exists
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(['status' => 'fail', 'message' => 'Email already registered']);
    error_log("Email already registered: $email");
    exit;
}

// Hash the password

// Insert the new user into the database
$stmt = $pdo->prepare("
    INSERT INTO users (email, password, name) 
    VALUES (:email, :password, :name)
");
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':name', $name);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    error_log("User registered successfully: $email");
} else {
    echo json_encode(['status' => 'fail', 'message' => 'Registration failed']);
    error_log("Registration failed for email: $email");
}
?>
