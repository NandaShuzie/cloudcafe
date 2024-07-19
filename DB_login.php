<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    //retrieve from data

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Database Connection

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "auth";

    $conn = new mysqli($shost, $dbusername, $dbpassword, $dbname);

    if($conn->connect_error){
        die("Connection failed: ". $conn->connect_error);

    }
    
    // validate Login authentication
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    $result = $conn->query($query);

    if($result->num_rows == 1){
        //Login succes
        header("Location : ");
        exit();
    }

    else{
        //Login failed
        header("Location : ");
        exit();
    }

    $conn->close();
}

?>