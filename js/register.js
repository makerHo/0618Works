window.addEventListener("load",function(){
	var wrap = document.querySelector(".wrap");
	var wrapTimer = setInterval(function(){
		var ronmad = Math.floor(Math.random()*6);
		wrap.style.background="url(img/"+ronmad+".jpg)";
	},6000)
/**
 * 通过Ajax的方式获取值并显示
 * FileDate
 * */
var email = document.querySelector(".email");
var emlFeedback = document.querySelector(".email_feedback");
var pwd = document.querySelector(".pwd");
var pwdFeedback = document.querySelector(".pwd_feedback");
var repwd = document.querySelector(".repwd");
var repwdFeedback = document.querySelector(".repwd_feedback");

var fd = new FormData();
var xhr = new XMLHttpRequest();
	//获取焦点后显示邮箱格式
	email.addEventListener("focus",function(){
		if(trim(email.value)==0){
			emlFeedback.innerHTML='Email format:"example@example.com"'
		}else(
			emlFeedback.innerHTML=""
		)
	})
	//失去焦点后执行邮箱验证
	email.addEventListener("keyup",function(){
		if(valide_email(trim(email.value))){
			emlFeedback.innerHTML="This e-mail is valid";
			emlFeedback.style.color="green";
		}else{
			emlFeedback.innerHTML="Please enter a valid e-mail address.";
			emlFeedback.style.color="red"
		}
	})
	//密码验证
	pwd.addEventListener("focus",function(){
		
	})
	pwd.addEventListener("keyup",function(){
		if(){}
	});
//----------------------
});