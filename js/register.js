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
var regBtn = document.querySelector(".regBtn");
var pic = document.querySelector(".pic");
var feedback = document.querySelector(".feedback");

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
		if(trim(pwd.value)==0){
			pwdFeedback.innerHTML="Your password must be 8-16 characters, and include at least one lowercase letter, one uppercase letter, and a number!";
	}else{
		pwdFeedback.innerHTML="";
	}})
	pwd.addEventListener("keyup",function(){
		switch(valide_pwd(trim(pwd.value))){
			case 3:
				pwdFeedback.innerHTML="密码强度弱";
				pwdFeedback.style.color="red";
				break;
			case 2:
				pwdFeedback.innerHTML="密码强度中";
				pwdFeedback.style.color="orange";
				errorMsg="密码强度较中"
				break;
			case 1:
				pwdFeedback.innerHTML="密码强度较强";
				pwdFeedback.style.color="seagreen";
				errorMsg="密码强度较弱"
				break;
			case 0:
				pwdFeedback.innerHTML="密码强度高";
				pwdFeedback.style.color="green";
				errorMsg="密码强度高"
				break;
		}
	});
	//repwd 验正
	repwd.addEventListener("focus",function(){
		if(trim(repwd.value)==0){
			repwdFeedback.innerHTML="Please re-enter your password!"
		}else{
			repwdFeedback.innerHTML="";
		}
	})
	repwd.addEventListener("keyup",function(){
		if(trim(pwd.value)==trim(repwd.value)){
			repwdFeedback.innerHTML="The password is consistent";
			repwdFeedback.style.color="green";
		}else{
			repwdFeedback.innerHTML="The password isn't consistent";
			repwdFeedback.style.color="red";
		}
	})
	//regBtn click 非空验证
	regBtn.addEventListener("click",function(){
		if(trim(email.value)==0){
			emlFeedback.innerHTML="Please enter your e-mail address";
			emlFeedback.style.color="red";
			return false;
		}else if(trim(pwd.value)==0){
			pwdFeedback.innerHTML="Please enter your password address";
			pwdFeedback.style.color="red";
			return false;
		}else if(trim(repwd.value)==0){
			repwdFeedback.innerHTML="Please re-enter your password";
			repwdFeedback.style.color="red";
			return false;
		}else{
			xhr.open("post","data4.php");
			feedback.innerHTML="loading..."
			fd.append("email",email.value);
			fd.append("pwd",pwd.value);
			fd.append("pic",pic.files[0]);
			xhr.send(fd);
			xhr.addEventListener("readystatechange",function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						feedback.innerHTML=xhr.responseText;
					}
				}
			});
		}
	})
//----------------------
});