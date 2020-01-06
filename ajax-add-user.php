<?php

session_start();

    $LOGIN = strip_tags($_REQUEST["LOGIN"]);
    $PASSWORD = strip_tags($_REQUEST["PASSWORD"]);
    $REPASSWORD = strip_tags($_REQUEST["REPASSWORD"]);
    $EMAIL = strip_tags($_REQUEST["EMAIL"]);

    $GOOD_DATA = true;

    $array_error = array();
    $array_error['answer']=null;
    $array_error['_error_list_login2']=array();
    $array_error['_error_list_password2']=array();
    $array_error['_error_list_repassword']=array();
    $array_error['_error_list_email']=array();

    if($LOGIN=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login2'],"Pole nie może być puste");
    }

    if(strlen($LOGIN)<=3)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login2'],"Login musi się składać z minimum 4 znaków");
    }

    if(strlen($LOGIN)>20)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login2'],"Login musi się składać z maximum 20 znaków");
    }

    if(ctype_alnum($LOGIN) == false)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_login2'],"Nie dozwolone znaki");
    }

    if($PASSWORD=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password2'],"Pole nie może być puste");
    }

    if(strlen($PASSWORD)<=3)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password2'],"Login musi się składać z minimum 4 znaków");
    }

    if(strlen($PASSWORD)>30)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password2'],"Login musi się składać z maximum 30 znaków");
    }

    if($PASSWORD != $_REQUEST["PASSWORD"] )
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_password2'],"Nie dozwolone znaki");
    }

    if($REPASSWORD=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_repassword'],"Pole nie może być puste");
    }

    if($REPASSWORD != $PASSWORD)
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_repassword'],"Nie dozwolone znaki");
    }

    if($REPASSWORD != $_REQUEST["REPASSWORD"] )
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_repassword'],"Hasła muszą być identyczne");
    }

    if($EMAIL=="")
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_email'],"Pole nie może być puste");
    }

    if($EMAIL != $_REQUEST["EMAIL"] )
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_email'],"Nie dozwolone znaki");
    }


    $EMAIL = filter_var($EMAIL, FILTER_SANITIZE_EMAIL);

    if(!filter_var($EMAIL, FILTER_VALIDATE_EMAIL))
    {
        $GOOD_DATA = false;
        array_push($array_error['_error_list_email'],"Podaj poprawny adres e-mail");
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
            $result = $conn->query("SELECT EMAIL FROM login WHERE EMAIL='$EMAIL'");
                        
            if (!$result) throw new Exception($conn->connect_error);
                                
            $number_of_email = $result->num_rows;
            if($number_of_email>0)
            {
                $GOOD_DATA = false;
                array_push($array_error['_error_list_email'],"Taki E-MAIL jest już zarejestrowany!");
            }  

            $result = $conn->query("SELECT LOGIN FROM login WHERE LOGIN='$LOGIN'");
 
            if (!$result) throw new Exception($conn->connect_error);
            
            $number_of_user = $result->num_rows;
            if($number_of_user>0)
            {
                $GOOD_DATA = false;
                array_push($array_error['_error_list_login2'],"Taki LOGIN już istnieje!");
            }

            if($GOOD_DATA == true)
            {
                $PASSWORD_HASH = password_hash($PASSWORD, PASSWORD_DEFAULT);

                if($conn->query("INSERT INTO login (LOGIN, PASSWORD, EMAIL)
                VALUES ('$LOGIN', '$PASSWORD_HASH', '$EMAIL')"))
                {
                    $_SESSION['USER_LOGIN'] = $LOGIN;

                    $array_error['answer']="success";
                    echo json_encode($array_error);
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