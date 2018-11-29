<?php

$conn = new mysqli("localhost", "root", "root", "pharmacy",3306);


$stat = "SELECT sales.salesID, sales.pharmacistID, customers.fname, customers.lname, drugs.drugname, sales.amount, sales.datetime  
FROM sales
JOIN customers ON sales.customerID = customers.customerID 
JOIN drugs ON sales.drugID = drugs.drugID
ORDER BY sales.datetime;";
$res = mysqli_query($conn, $stat);

if(mysqli_num_rows($res) > 0){
  $rows = array();

    while($row = mysqli_fetch_assoc($res)){
      $rows[] = $row;
    }
  echo json_encode($rows);
} else {
  echo "L";
}

?>