const _button_in = document.querySelector("#bottom");
const _login1 = document.querySelector("#login");
const _login2 = document.querySelector(".login");
const _password1 = document.querySelector("#password");
const _password2 = document.querySelector(".password");

_button_in.addEventListener('click', check);
_login1.addEventListener('change', check1);
_password1.addEventListener('change', check2);

function check()
{

	var _login_value = document.querySelector("#login").value;
	var _password_value = document.querySelector("#password").value;


	if(_login_value=="")
	{

		elogin1();
	}

	if(_login_value==" ")
	{

		elogin2();
	}

	else if(_login_value!="")
	{
		_login1.style.borderBottomColor = "green" ;
	}
	
	if(_password_value=="")
	{
		epassword1();
	}

	if(_password_value==" ")
	{
		epassword2();
	}

	else if(_password_value!="")
	{
		_password1.style.borderBottomColor = "green" ;
	}

}


function check1()
{

	var _login_value = document.querySelector("#login").value;

	if(_login_value=="")
	{
		_login1.style.borderBottomColor = "black" ;
	}

	if(_login_value==" ")
	{
		elogin2();
	}

	else if(_login_value!="")
	{
		_login1.style.borderBottomColor = "green" ;
	}
	
}

function check2()
{

	var _password_value = document.querySelector("#password").value;

	if(_password_value=="")
	{
		_password1.style.borderBottomColor = "black" ;
	}

	if(_password_value==" ")
	{
		epassword2();

	}

	else if(_password_value!="")
	{
		_password1.style.borderBottomColor = "green" ;
	}

}



function end()
{
	this.style.animation = "x 0.1s 1";
	this.removeEventListener("animationiteration", end);
}

function elogin1()
{

	_login1.style.borderBottomColor = "red" ;
	_login_animation2.style.animation = "elogin 0.5s 2 ";
	_login1.style.animation = "elogin 0.5s 2 ";
	_login_animation2.addEventListener("animationiteration", end);
	_login1.addEventListener("animationiteration", end);

}

function elogin2()
{

	_login1.style.borderBottomColor = "red" ;
	_login1.style.animation = "elogin 0.5s 2 ";
	_login_animation2.addEventListener("animationiteration", end);
	_login1.addEventListener("animationiteration", end);	
	
}

function epassword1()
{

	_password1.style.borderBottomColor = "red" ;
	_password_animation2.style.animation = "epassword 0.5s 2 ";
	_password1.style.animation = "epassword 0.5s 2";
	_password_animation2.addEventListener("animationiteration", end);
	_password1.addEventListener("animationiteration", end);
	
}

function epassword2()
{
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

	var _login_value_up = document.querySelector("#login2").value;
	var _password_value_up = document.querySelector("#password2").value;
	var _repassword_value_up = document.querySelector("#re_password").value;
	var _email_value_up = document.querySelector("#e-mail").value;


	if(_login_value_up=="")
	{

		elogin1_up();
	}

	if(_login_value_up==" ")
	{

		elogin2_up();
	}

	else if(_login_value_up!="")
	{
		_login1_up.style.borderBottomColor = "green" ;
	}
	
	if(_password_value_up=="")
	{
		epassword1_up();
	}

	if(_password_value_up==" ")
	{
		epassword2_up();
	}

	else if(_password_value_up!="")
	{
		_password1_up.style.borderBottomColor = "green" ;
	}

	if(_repassword_value_up=="")
	{

		erepassword();
	}

	if(_repassword_value_up==" ")
	{

		erepassword2();
	}

	else if(_repassword_value_up!="")
	{
		_repassword1.style.borderBottomColor = "green" ;
	}
	
	if(_email_value_up=="")
	{
		eemail();
	}

	if(_email_value_up==" ")
	{
		eemail2();
	}

	else if(_email_value_up!="")
	{
		_email1.style.borderBottomColor = "green" ;
	}

}

function check1_up()
{

	var _login_value_up = document.querySelector("#login2").value;

	if(_login_value_up=="")
	{
		_login1_up.style.borderBottomColor = "black" ;
	}

	if(_login_value_up==" ")
	{
		elogin2_up();
	}

	else if(_login_value_up!="")
	{
		_login1_up.style.borderBottomColor = "green" ;
	}
	
}

function check2_up()
{

	var _password_value_up = document.querySelector("#password2").value;

	if(_password_value_up=="")
	{
		_password1_up.style.borderBottomColor = "black" ;
	}

	if(_password_value_up==" ")
	{
		epassword2_up();

	}

	else if(_password_value_up!="")
	{
		_password1_up.style.borderBottomColor = "green" ;
	}

}


function check3_up()
{

	var _repassword_value_up = document.querySelector("#re_password").value;

	if(_repassword_value_up=="")
	{
		_repassword1.style.borderBottomColor = "black" ;
	}

	if(_repassword_value_up==" ")
	{
		erepassword2();
	}

	else if(_repassword_value_up!="")
	{
		_repassword1.style.borderBottomColor = "green" ;
	}
	
}

function check4_up()
{

	var _email_value_up = document.querySelector("#e-mail").value;

	if(_email_value_up=="")
	{
		_email1.style.borderBottomColor = "black" ;
	}

	if(_email_value_up==" ")
	{
		eemail2();
	}

	else if(_email_value_up!="")
	{
		_email1.style.borderBottomColor = "green" ;
	}

}



function elogin1_up()
{

	_login1_up.style.borderBottomColor = "red" ;
	_login2_animation2.style.animation = "elogin 0.5s 2 ";
	_login1_up.style.animation = "elogin 0.5s 2 ";
	_login2_animation2.addEventListener("animationiteration", end);
	_login1_up.addEventListener("animationiteration", end);

}

function elogin2_up()
{

	_login1_up.style.borderBottomColor = "red" ;
	_login1_up.style.animation = "elogin 0.5s 2 ";
	_login2_animation2.addEventListener("animationiteration", end);
	_login1_up.addEventListener("animationiteration", end);	
	
}

function epassword1_up()
{

	_password1_up.style.borderBottomColor = "red" ;
	_password2_animation2.style.animation = "epassword 0.5s 2 ";
	_password1_up.style.animation = "epassword 0.5s 2";
	_password2_animation2.addEventListener("animationiteration", end);
	_password1_up.addEventListener("animationiteration", end);
	
}

function epassword2_up()
{
	_password1_up.style.borderBottomColor = "red" ;
	_password1_up.style.animation = "epassword 0.5s 2 ";
	_password2_animation2.addEventListener("animationiteration", end);
	_password1_up.addEventListener("animationiteration", end);
	
}


function erepassword()
{

	_repassword1.style.borderBottomColor = "red" ;
	_repassword_animation2.style.animation = "elogin 0.5s 2 ";
	_repassword1.style.animation = "elogin 0.5s 2 ";
	_repassword_animation2.addEventListener("animationiteration", end);
	_repassword1.addEventListener("animationiteration", end);

}

function erepassword2()
{

	_repassword1.style.borderBottomColor = "red" ;
	_repassword1.style.animation = "elogin 0.5s 2 ";
	_repassword_animation2.addEventListener("animationiteration", end);
	_repassword1.addEventListener("animationiteration", end);	
}

function eemail()
{

	_email1.style.borderBottomColor = "red" ;
	_email_animation2.style.animation = "epassword 0.5s 2 ";
	_email1.style.animation = "epassword 0.5s 2";
	_email_animation2.addEventListener("animationiteration", end);
	_email1.addEventListener("animationiteration", end);
	
}

function eemail2()
{
	_email1.style.borderBottomColor = "red" ;
	_email1.style.animation = "epassword 0.5s 2 ";
	_email_animation2.addEventListener("animationiteration", end);
	_email1.addEventListener("animationiteration", end);
	
}