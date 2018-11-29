<?php

$conn = new mysqli("localhost", "root", "root", "pharmacy",3306);
$id;
$stat;

if($_GET['q'] != null){
  $id = $_GET['q'];
  $stat = "SELECT * FROM CUSTOMERS WHERE customerID = '$id'";
} else{
  $stat = "SELECT * FROM CUSTOMERS";
}
$res = mysqli_query($conn, $stat);

if(mysqli_num_rows($res) > 0){
  $rows = array();

    while($row = mysqli_fetch_assoc($res)){
      $rows[] = $row;
    }
  echo json_encode($rows);
} else {
  echo "dne";
}

?>