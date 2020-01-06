<?php

    $EMAIL = $_REQUEST["EMAIL"];

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
            $result = $conn->query("SELECT EMAIL FROM login WHERE EMAIL='$EMAIL'");
                        
            if (!$result) throw new Exception($conn->connect_error);
                                
            $number_of_email = $result->num_rows;
            if($number_of_email>0)
            {
                echo json_encode("Taki E-MAIL jest już zarejestrowany!");
            }  

            $conn->close();

        }                  
 
    }

    catch (Exception $e)
    {

    }
                   
?>