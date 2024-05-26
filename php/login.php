<?php
// login.php
require 'vendor/autoload.php';
require 'config.php'; // Include the database configuration

use Predis\Client as RedisClient;

$email = $_POST['email'];
$password = $_POST['password'];

error_log("Received email: $email");
error_log("Received password: $password");

// Create the users table if it does not exist
$createTableSQL = "
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
";

$pdo->exec($createTableSQL);
error_log("Checked for existence of users table and created if not exists");

// Fetch the user from the database
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && $password) { 
    $redis = new RedisClient();
    $sessionId = bin2hex(random_bytes(32));

    // Store user info in Redis
    $userInfo = [
        'email' => $user['email'],
        'name' => $user['name']
    ];

    $redis->set($sessionId, json_encode($userInfo));

    echo json_encode(['status' => 'success', 'sessionId' => $sessionId]);
    error_log("Login successful, session ID: $sessionId");
} else {
    echo json_encode(['status' => 'fail', 'message' => 'Invalid email or password']);
    error_log("Login failed for email: $email");
}
?>
