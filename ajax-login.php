<?php

session_start();

    $LOGIN = strip_tags($_REQUEST["LOGIN"]);
    $PASSWORD = strip_tags($_REQUEST["PASSWORD"]);

    $GOOD_DATA = true;

    $array_error = array();
    $array_error['answer']=null;
    $array_error['_error_list_login']=array();
    $array_error['_error_list_password']=array();

    if($LOGIN=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login'],"Pole nie może być puste");
    }

    if(ctype_alnum($LOGIN) == false)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login'],"Nie dozwolone znaki");
    }

    if($PASSWORD=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password'],"Pole nie może być puste");
    }

    if($PASSWORD != $_REQUEST["PASSWORD"] )
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password'],"Nie dozwolone znaki");
    }


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
            if($GOOD_DATA == true)
            {
                if($result = $conn->query("SELECT LOGIN,PASSWORD FROM login WHERE LOGIN='$LOGIN'"))
                {
                    $number_of_user = $result->num_rows;
                    if($number_of_user>0)
                    {
                        $row = $result->fetch_assoc();

                        if(password_verify($PASSWORD,$row['PASSWORD']))
                        {
                            $_SESSION['USER_LOGIN'] = $LOGIN;

                            $array_error['answer']="success";
                            echo json_encode($array_error);
 
                        }
                        else
                        {
                            array_push($array_error['_error_list_password'],"Nie poprawne hasło!");
                            $array_error['answer']="error";
                            echo json_encode($array_error);
                        }

                    }
                    else
                    {
                        array_push($array_error['_error_list_login'],"Taki LOGIN nie istnieje!");
                        $array_error['answer']="error";
                        echo json_encode($array_error);
                    }
                }
                else
                {
                    throw new Exception($conn->connect_error);
                }

            }
            else
            {
                $array_error['answer']="error";
                echo json_encode($array_error);
            }

            $conn->close();  
        }
    }                                    

    catch (Exception $e)
    {
        $array_error['answer']="error_connect";
        echo json_encode($array_error);
    }
    
                   
?>