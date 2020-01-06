<?php

    $LOGIN = $_REQUEST["LOGIN"];

    require_once "connect.php";
    mysqli_report(MYSQLI_REPORT_STRICT);
    
    try
    {
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error)
        {
            throw new Exception(mysqli_connect_errno());
        }

        else
        {
            $result = $conn->query("SELECT LOGIN FROM login WHERE LOGIN='$LOGIN'");
                        
            if (!$result) throw new Exception($conn->connect_error);
                                
            $number_of_users = $result->num_rows;
            if($number_of_users<1)
            {
                echo json_encode("Taki LOGIN nie istnieje!");
            }  

            $conn->close();

        }                  
 
    }

    catch (Exception $e)
    {

    }
                   
?>