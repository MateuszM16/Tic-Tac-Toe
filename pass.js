const _button_in = document.querySelector("#bottom");
const _login1 = document.querySelector("#login");
const _login2 = document.querySelector(".login");
const _password1 = document.querySelector("#password");
const _password2 = document.querySelector(".password");

const _error_login = document.querySelector(".error_login");
const _error_password = document.querySelector(".error_password");

const _error_login2 = document.querySelector(".error_login2");
const _error_password2 = document.querySelector(".error_password2");
const _error_repassword = document.querySelector(".error_repassword");
const _error_email = document.querySelector(".error_email");

_button_in.addEventListener('click', check);
_login1.addEventListener('change', check1);
_password1.addEventListener('change', check2);

var _error_list_login = [];
var _error_list_password = [];

var _error_list_login2 = [];
var _error_list_password2 = [];
var _error_list_repassword = [];
var _error_list_email = [];

const _error_login_text = document.querySelector(".error_login_text");
const _error_password_text = document.querySelector(".error_password_text");

const _error_login2_text = document.querySelector(".error_login2_text");
const _error_password2_text = document.querySelector(".error_password2_text");
const _error_repassword_text = document.querySelector(".error_repassword_text");
const _error_email_text = document.querySelector(".error_email_text");

const inputvalue = /\s/;


function error_text()
{

	var i = 1;

	while(_error_list_login.length > 0) 
	{
		_error_login_text.innerHTML+=i+". "+_error_list_login[0]+"</br></br>";
		_error_list_login.shift();
		i++;
	}


	i = 1;
 
	while(_error_list_password.length > 0) 
	{
		_error_password_text.innerHTML+=i+". "+_error_list_password[0]+"</br></br>";
		_error_list_password.shift();
		i++;
	}
}

function error_text2()
{

	var i = 1;

	while(_error_list_login2.length > 0) 
	{
		_error_login2_text.innerHTML+=i+". "+_error_list_login2[0]+"</br></br>";
		_error_list_login2.shift();
		i++;
	}


	i = 1;

	while(_error_list_password2.length > 0) 
	{
		_error_password2_text.innerHTML+=i+". "+_error_list_password2[0]+"</br></br>";
		_error_list_password2.shift();
		i++;
	}


	i = 1;

	while(_error_list_repassword.length > 0) 
	{
		_error_repassword_text.innerHTML+=i+". "+_error_list_repassword[0]+"</br></br>";
		_error_list_repassword.shift();
		i++;
	}


	i = 1;


	while(_error_list_email.length > 0) 
	{
		_error_email_text.innerHTML+=i+". "+_error_list_email[0]+"</br></br>";
		_error_list_email.shift();
		i++;
	}

}

function check()
{
	var _login_value = document.querySelector("#login").value;
	var _password_value = document.querySelector("#password").value;

	_error_login_text.innerHTML="";
	_error_password_text.innerHTML="";

	if(_login_value=="")
	{
		_error_list_login.push("Pole nie może być puste");
		elogin1();
	}

	if(_login_value.match(inputvalue))
	{
		_error_list_login.push("Nie dozwolone znaki");
		elogin2();
	}

	if(_error_list_login.length==0)
	{
		_login1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_login.style.display="none";
	}
	
	if(_password_value=="")
	{
		_error_list_password.push("Pole nie może być puste");
		epassword1();
	}

	if(_password_value.match(inputvalue))
	{
		_error_list_password.push("Nie dozwolone znaki");
		epassword2();
	}
	
	if(_error_list_password.length==0)
	{

		_password1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_password.style.display="none";
	}

	error_text();

}


function check1()
{

	var _login_value = document.querySelector("#login").value;
	_error_login_text.innerHTML="";

	if(_login_value=="")
	{
		_error_list_login.push("Pole nie może być puste");
		elogin1();
	}

	if(_login_value.match(inputvalue))
	{
		_error_list_login.push("Nie dozwolone znaki");
		elogin2();
	}

	if(_error_list_login.length==0)
	{
		_login1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_login.style.display="none";
	}

	error_text();
	
}

function check2()
{
	var _password_value = document.querySelector("#password").value;
	_error_password_text.innerHTML="";

	if(_password_value=="")
	{
		_error_list_password.push("Pole nie może być puste");
		epassword1();
	}

	if(_password_value.match(inputvalue))
	{
		_error_list_password.push("Nie dozwolone znaki");
		epassword2();
	}
	
	if(_error_list_password.length==0)
	{

		_password1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_password.style.display="none";
	}

	error_text();

}



function end()
{
	this.style.animation = "x 0.1s 1";
	this.removeEventListener("animationiteration", end);
}

function elogin1()
{
	_error_login.style.display="block";
	_login1.style.borderBottomColor = "red" ;
	_login_animation2.style.animation = "elogin 0.5s 2 ";
	_login1.style.animation = "elogin 0.5s 2 ";
	_login_animation2.addEventListener("animationiteration", end);
	_login1.addEventListener("animationiteration", end);

}

function elogin2()
{
	_error_login.style.display="block";
	_login1.style.borderBottomColor = "red" ;
	_login1.style.animation = "elogin 0.5s 2 ";
	_login_animation2.addEventListener("animationiteration", end);
	_login1.addEventListener("animationiteration", end);	
	
}

function epassword1()
{
	_error_password.style.display="block";
	_password1.style.borderBottomColor = "red" ;
	_password_animation2.style.animation = "epassword 0.5s 2 ";
	_password1.style.animation = "epassword 0.5s 2";
	_password_animation2.addEventListener("animationiteration", end);
	_password1.addEventListener("animationiteration", end);
	
}

function epassword2()
{

	_error_password.style.display="block";
	_password1.style.borderBottomColor = "red" ;
	_password1.style.animation = "epassword 0.5s 2 ";
	_password_animation2.addEventListener("animationiteration", end);
	_password1.addEventListener("animationiteration", end);
	
}

//-----------------------------------------------------------------------------------------------------------------------------------------------



const _button_up = document.querySelector("#bottom2");
const _login1_up = document.querySelector("#login2");
const _login2_up = document.querySelector(".login2");
const _password1_up = document.querySelector("#password2");
const _password2_up = document.querySelector(".password2");

const _repassword1 = document.querySelector("#re_password");
const _repassword2 = document.querySelector(".re_password");
const _email1 = document.querySelector("#e-mail");
const _email2 = document.querySelector(".e-mail");

_button_up.addEventListener('click', check_up);
_login1_up.addEventListener('change', check1_up);
_password1_up.addEventListener('change', check2_up);
_repassword1.addEventListener('change', check3_up);
_email1.addEventListener('change', check4_up);


function check_up()
{
	_error_login2_text.innerHTML="";
	_error_password2_text.innerHTML="";
	_error_repassword_text.innerHTML="";
	_error_email_text.innerHTML="";

	var _login_value_up = document.querySelector("#login2").value;
	var _password_value_up = document.querySelector("#password2").value;
	var _repassword_value_up = document.querySelector("#re_password").value;
	var _email_value_up = document.querySelector("#e-mail").value;
	

	if(_login_value_up=="")
	{
		_error_list_login2.push("Pole nie może być puste");
		elogin1_up();
	}

	if(_login_value_up.match(inputvalue))
	{
		_error_list_login2.push("Nie dozwolone znaki");
		elogin2_up();
	}

	if(_login_value_up.length<4)
	{
		_error_list_login2.push("Login musi się składać z minimum 4 znaków");
		elogin2_up();
	}

	if(_error_list_login2.length==0)
	{
		_login1_up.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_login2.style.display="none";
	}
	
	if(_password_value_up=="")
	{
		_error_list_password2.push("Pole nie może być puste");
		epassword1_up();
	}

	if(_password_value_up.match(inputvalue))
	{
		_error_list_password2.push("Nie dozwolone znaki");
		epassword2_up();
	}

	if(_password_value_up.length<4)
	{
		_error_list_password2.push("Hasło musi się składać z minimum 4 znaków");
		epassword2_up();
	}

	if(_error_list_password2.length==0)
	{
		_password1_up.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_password2.style.display="none";
	}

	if(_repassword_value_up=="")
	{
		_error_list_repassword.push("Pole nie może być puste");
		erepassword();
	}

	if(_repassword_value_up.match(inputvalue))
	{
		_error_list_repassword.push("Nie dozwolone znaki");
		erepassword2();
	}

	if(_repassword_value_up!==_password_value_up)
	{
		_error_list_repassword.push("Hasła muszą być identyczne");
		erepassword2();
	}

	if(_error_list_repassword.length==0)
	{
		_repassword1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_repassword.style.display="none";
	}


	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(_email_value_up=="")
	{
		_error_list_email.push("Pole nie może być puste");
		eemail();
	}

	if(!_email_value_up.match(mailformat))
	{
		_error_list_email.push("Podaj poprawny adres e-mail");
		eemail2();
	}

	if(_error_list_email.length==0)
	{
		_email1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_email.style.display="none";
	}

	error_text2();
	
}

function check1_up()
{

	_error_login2_text.innerHTML="";

	var _login_value_up = document.querySelector("#login2").value;

	if(_login_value_up=="")
	{
		_error_list_login2.push("Pole nie może być puste");
		elogin1_up();
	}

	if(_login_value_up.match(inputvalue))
	{
		_error_list_login2.push("Nie dozwolone znaki");
		elogin2_up();
	}

	if(_login_value_up.length<4)
	{
		_error_list_login2.push("Login musi się składać z minimum 4 znaków");
		elogin2_up();
	}

	if(_error_list_login2.length==0)
	{
		_login1_up.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_login2.style.display="none";
	}

	error_text2();
	
}

function check2_up()
{

	var _password_value_up = document.querySelector("#password2").value;
	_error_password2_text.innerHTML="";


	if(_password_value_up=="")
	{
		_error_list_password2.push("Pole nie może być puste");
		epassword1_up();
	}

	if(_password_value_up.match(inputvalue))
	{
		_error_list_password2.push("Nie dozwolone znaki");
		epassword2_up();
	}

	if(_password_value_up.length<4)
	{
		_error_list_password2.push("Hasło musi się składać z minimum 4 znaków");
		epassword2_up();
	}

	if(_error_list_password2.length==0)
	{
		_password1_up.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_password2.style.display="none";
	}

	error_text2();
}


function check3_up()
{

	var _repassword_value_up = document.querySelector("#re_password").value;
	var _password_value_up = document.querySelector("#password2").value;

	_error_repassword_text.innerHTML="";


	if(_repassword_value_up=="")
	{
		_error_list_repassword.push("Pole nie może być puste");
		erepassword();
	}

	if(_repassword_value_up.match(inputvalue))
	{
		_error_list_repassword.push("Nie dozwolone znaki");
		erepassword2();
	}

	if(_repassword_value_up!==_password_value_up)
	{
		_error_list_repassword.push("Hasła muszą być identyczne");
		erepassword2();
	}

	if(_error_list_repassword.length==0)
	{
		_repassword1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_repassword.style.display="none";
	}
	
	error_text2();

}

function check4_up()
{
	var _email_value_up = document.querySelector("#e-mail").value;

	_error_email_text.innerHTML="";

	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(_email_value_up=="")
	{
		_error_list_email.push("Pole nie może być puste");
		eemail();
	}

	if(!_email_value_up.match(mailformat))
	{
		_error_list_email.push("Podaj poprawny adres e-mail");
		eemail2();
	}

	if(_error_list_email.length==0)
	{
		_email1.style.borderBottomColor = "rgb(69, 255, 32)" ;
		_error_email.style.display="none";
	}

	error_text2();

}

function elogin1_up()
{
	_error_login2.style.display="block";
	_login1_up.style.borderBottomColor = "red" ;
	_login2_animation2.style.animation = "elogin 0.5s 2 ";
	_login1_up.style.animation = "elogin 0.5s 2 ";
	_login2_animation2.addEventListener("animationiteration", end);
	_login1_up.addEventListener("animationiteration", end);

}

function elogin2_up()
{
	_error_login2.style.display="block";
	_login1_up.style.borderBottomColor = "red" ;
	_login1_up.style.animation = "elogin 0.5s 2 ";
	_login2_animation2.addEventListener("animationiteration", end);
	_login1_up.addEventListener("animationiteration", end);	
	
}

function epassword1_up()
{
	_error_password2.style.display="block";
	_password1_up.style.borderBottomColor = "red" ;
	_password2_animation2.style.animation = "epassword 0.5s 2 ";
	_password1_up.style.animation = "epassword 0.5s 2";
	_password2_animation2.addEventListener("animationiteration", end);
	_password1_up.addEventListener("animationiteration", end);
	
}

function epassword2_up()
{
	_error_password2.style.display="block";
	_password1_up.style.borderBottomColor = "red" ;
	_password1_up.style.animation = "epassword 0.5s 2 ";
	_password2_animation2.addEventListener("animationiteration", end);
	_password1_up.addEventListener("animationiteration", end);
	
}


function erepassword()
{
	_error_repassword.style.display="block";
	_repassword1.style.borderBottomColor = "red" ;
	_repassword_animation2.style.animation = "elogin 0.5s 2 ";
	_repassword1.style.animation = "elogin 0.5s 2 ";
	_repassword_animation2.addEventListener("animationiteration", end);
	_repassword1.addEventListener("animationiteration", end);

}

function erepassword2()
{
	_error_repassword.style.display="block";
	_repassword1.style.borderBottomColor = "red" ;
	_repassword1.style.animation = "elogin 0.5s 2 ";
	_repassword_animation2.addEventListener("animationiteration", end);
	_repassword1.addEventListener("animationiteration", end);	
}

function eemail()
{
	_error_email.style.display="block";
	_email1.style.borderBottomColor = "red" ;
	_email_animation2.style.animation = "epassword 0.5s 2 ";
	_email1.style.animation = "epassword 0.5s 2";
	_email_animation2.addEventListener("animationiteration", end);
	_email1.addEventListener("animationiteration", end);
	
}

function eemail2()
{
	_error_email.style.display="block";
	_email1.style.borderBottomColor = "red" ;
	_email1.style.animation = "epassword 0.5s 2 ";
	_email_animation2.addEventListener("animationiteration", end);
	_email1.addEventListener("animationiteration", end);
	
}