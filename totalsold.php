<?php

$conn = new mysqli("localhost", "root", "root", "pharmacy",3306);


$stat = "
SELECT drugs.drugid, drugs.drugname, SUM(sales.amount * drugs.price) AS total
FROM  sales
JOIN drugs ON drugs.drugid = sales.drugID
GROUP BY sales.drugID;
";
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