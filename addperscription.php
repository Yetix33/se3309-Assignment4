<?php
    $conn = new mysqli("localhost", "root", "root", "pharmacy",3306);
    $customerID= $_POST['customerID'];
    $drugID = $_POST['drugID'];
    $doctorID = $_POST['doctorID'];
    $cyclelength = $_POST['cyclelength'];
    $datetime = $_POST['date'];

    $customercheck = "SELECT * from customers where customerID = $customerID";
    $drugcheck =  "SELECT * from drugs where drugid = $drugID";
    $doctorcheck = "SELECT * from doctors where doctorID = $doctorID";
    $poststatement = "INSERT INTO perscription VALUES ($customerID, $drugID, $doctorID, $cyclelength, '$datetime')";

    $res1 = mysqli_query($conn, $customercheck);
    $res2 = mysqli_query($conn, $drugcheck);
    $res3 = mysqli_query($conn, $doctorcheck);
    
    if($res1 == null){
        echo json_encode("Customer isnt in database");

    } else if ($res2 == null){
        echo json_encode("Drug isnt in database");

    } else if ($res3 == null ){
        echo json_encode("Doctor isnt in database");

    } else {
        $res4 = mysqli_query($conn, $poststatement);
        echo json_encode($res4);
    }

    
?>