const _login_animation = document.querySelector("#login");
const _login_animation2 = document.querySelector(".login");

var _stop1 = 1;
var _stop2 = 1;
var _stop3 = 1;
var _stop4 = 1;
var _stop5 = 1;
var _stop6 = 1;

_login_animation.addEventListener('mouseover', login_animation_start);
_login_animation.addEventListener('mouseout', login_animation_back);
_login_animation.addEventListener('focus', function(){ _stop1=0;});
_login_animation.addEventListener('blur', function(){ _stop1=1;});
_login_animation.addEventListener('blur', login_animation_back);

_login_animation.addEventListener('focus', function(){ _login_animation.style.borderBottomColor = "#ff7c00";});
_login_animation.addEventListener('blur', function(){ _login_animation.style.borderBottomColor = "black"; check1();  });


function login_animation_start()
{
	_login_animation2.style.animation = "login 1s 1 forwards";

}

function login_animation_back()
{

		if((document.querySelector("#login").value!="")||(_stop1==0))
		{

		}
		else
		{
			_login_animation2.style.animation = "login2 1s 1 forwards";
		}	

}


const _password_animation = document.querySelector("#password");
const _password_animation2 = document.querySelector(".password");

_password_animation.addEventListener('mouseover', password_animation_start);
_password_animation.addEventListener('mouseout', password_animation_back);
_password_animation.addEventListener('focus', function(){ _stop2=0;});
_password_animation.addEventListener('blur', function(){ _stop2=1;});
_password_animation.addEventListener('blur', password_animation_back);

_password_animation.addEventListener('focus', function(){ _password_animation.style.borderBottomColor = "#ff7c00";});
_password_animation.addEventListener('blur', function(){ _password_animation.style.borderBottomColor = "black"; check2();});


function password_animation_start()
{
	
	_password_animation2.style.animation = "password 1s 1 forwards";

}

function password_animation_back()
{

		if((document.querySelector("#password").value !="")||(_stop2==0))
		{

		}
		else
		{
			_password_animation2.style.animation = "password2 1s 1 forwards";
		}	

}


const _login2_animation = document.querySelector("#login2");
const _login2_animation2 = document.querySelector(".login2");


_login2_animation.addEventListener('mouseover', login2_animation_start);
_login2_animation.addEventListener('mouseout', login2_animation_back);
_login2_animation.addEventListener('focus', function(){ _stop3=0;});
_login2_animation.addEventListener('blur', function(){ _stop3=1;});
_login2_animation.addEventListener('blur', login2_animation_back);

_login2_animation.addEventListener('focus', function(){ _login2_animation.style.borderBottomColor = "#ff7c00";});
_login2_animation.addEventListener('blur', function(){ _login2_animation.style.borderBottomColor = "black"; check1_up();  });


function login2_animation_start()
{
	
	_login2_animation2.style.animation = "login 1s 1 forwards";

}

function login2_animation_back()
{

		if((document.querySelector("#login2").value !="")||(_stop3==0))
		{

		}
		else
		{
			_login2_animation2.style.animation = "login2 1s 1 forwards";
		}	

}


const _password2_animation = document.querySelector("#password2");
const _password2_animation2 = document.querySelector(".password2");

_password2_animation.addEventListener('mouseover', password2_animation_start);
_password2_animation.addEventListener('mouseout', password2_animation_back);
_password2_animation.addEventListener('focus', function(){ _stop4=0;});
_password2_animation.addEventListener('blur', function(){ _stop4=1;});
_password2_animation.addEventListener('blur', password2_animation_back);

_password2_animation.addEventListener('focus', function(){ _password2_animation.style.borderBottomColor = "#ff7c00";});
_password2_animation.addEventListener('blur', function(){ _password2_animation.style.borderBottomColor = "black"; check2_up();  });

function password2_animation_start()
{
	
	_password2_animation2.style.animation = "password 1s 1 forwards";

}

function password2_animation_back()
{

		if((document.querySelector("#password2").value !="")||(_stop4==0))
		{

		}
		else
		{
			_password2_animation2.style.animation = "password2 1s 1 forwards";
		}	
}


const _repassword_animation = document.querySelector("#re_password");
const _repassword_animation2 = document.querySelector(".re_password");

_repassword_animation.addEventListener('mouseover', repassword_animation_start);
_repassword_animation.addEventListener('mouseout', repassword_animation_back);
_repassword_animation.addEventListener('focus', function(){ _stop5=0;});
_repassword_animation.addEventListener('blur', function(){ _stop5=1;});
_repassword_animation.addEventListener('blur', repassword_animation_back);

_repassword_animation.addEventListener('focus', function(){ _repassword_animation.style.borderBottomColor = "#ff7c00";});
_repassword_animation.addEventListener('blur', function(){ _repassword_animation.style.borderBottomColor = "black"; check3_up();  });

function repassword_animation_start()
{
	
	_repassword_animation2.style.animation = "re_password 1s 1 forwards";

}

function repassword_animation_back()
{

		if((document.querySelector("#re_password").value !="")||(_stop5==0))
		{

		}
		else
		{
			_repassword_animation2.style.animation = "re_password2 1s 1 forwards";
		}	

}


const _email_animation = document.querySelector("#e-mail");
const _email_animation2 = document.querySelector(".e-mail");

_email_animation.addEventListener('mouseover', email_animation_start);
_email_animation.addEventListener('mouseout', email_animation_back);
_email_animation.addEventListener('focus', function(){ _stop6=0;});
_email_animation.addEventListener('blur', function(){ _stop6=1;});
_email_animation.addEventListener('blur', email_animation_back);


_email_animation.addEventListener('focus', function(){ _email_animation.style.borderBottomColor = "#ff7c00";});
_email_animation.addEventListener('blur', function(){ _email_animation.style.borderBottomColor = "black"; check4_up();  });

function email_animation_start()
{
	
	_email_animation2.style.animation = "e-mail 1s 1 forwards";

}

function email_animation_back()
{

		if((document.querySelector("#e-mail").value !="")||(_stop6==0))
		{

		}
		else
		{
			_email_animation2.style.animation = "e-mail2 1s 1 forwards";
		}	

}



const _log1 = document.querySelectorAll(".log1");
const _log2 = document.querySelectorAll(".log2");
const _log3 = document.querySelectorAll(".log3");

const _log_in = document.querySelector(".log-in");
const _log_up = document.querySelector(".log-up");

_log1[0].addEventListener('click', menu_animation_start);
_log2[0].addEventListener('click', menu_animation_back);

_log1[1].addEventListener('click', menu_animation_start);
_log2[1].addEventListener('click', menu_animation_back);


function menu_animation_start()
{
	_log_in.style.top = "5vw";
	_log_up.style.top = "-100vw";
	
	_log3[0].style.animation = "change1 0.5s 1 forwards";
	_log1[0].style.cursor="default";
	_log2[0].style.cursor="pointer";

	_log3[1].style.animation = "change1 0.5s 1 forwards";
	_log1[1].style.cursor="default";
	_log2[1].style.cursor="pointer";

	_log_up.style.animation = "log1 1s 1s 1 forwards"; //wjezdza nr2
	_log_in.style.animation = "log2	1s 0.5s 1 forwards"; //wyjezdza nr1

}

function menu_animation_back()
{
	
	_log_in.style.top = "-100vw";
	_log_up.style.top = "5vw";
	
	_log3[0].style.animation = "change2 0.5s 1 forwards";
	_log1[0].style.cursor="pointer";
	_log2[0].style.cursor="default";

	_log3[1].style.animation = "change2 0.5s 1 forwards";
	_log1[1].style.cursor="pointer";
	_log2[1].style.cursor="default";

	_log_up.style.animation = "log2 1s 0.5s 1 forwards";
	_log_in.style.animation = "log1 1s 1s 1 forwards ";
	
}
