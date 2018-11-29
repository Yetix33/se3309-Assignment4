<?php
    $conn = new mysqli("localhost", "root", "root", "pharmacy",3306);
    $customerID= $_POST['customerID'];
    $pharmacistID = $_POST['pharmacistID'];
    $drugID = $_POST['drugID'];
    $amount = $_POST['amount'];
    $datetime = $_POST['datetime'];

    $customercheck = "SELECT * from customers where customerID = $customerID";
    $pharmacistcheck = "SELECT * from pharmacists where pharmacistID = $pharmacistID";
    $drugcheck = "SELECT * from drugs where drugid = $drugID";
    $salesid = "SELECT MAX(salesID) as max from sales";

    $res1 = mysqli_query($conn, $customercheck);
    $res2 = mysqli_query($conn, $pharmacistcheck);
    $res3 = mysqli_query($conn, $drugcheck);
    
    
    if($res1 == null){
        echo json_encode("Customer isnt in database");

    } else if ($res2 == null){
        echo json_encode("pharmacist isnt in database");

    } else if ($res3 == null ){
        echo json_encode("drug isnt in database");

    } else {
        $newsalesid = $conn->query($salesid)->fetch_object()->max; 
        $newsalesid = $newsalesid + 1;
        $poststatement = "INSERT INTO sales VALUES($newsalesid, '$datetime', $pharmacistID, $customerID, $drugID, $amount)";
        $res4 = mysqli_query($conn, $poststatement);
        echo json_encode($res4);
    }


    

