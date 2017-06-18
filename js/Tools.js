function setCookie(name,value,expries,path,domain,secure){
		//cookie="username=tom;exprires=d;domain=127.0.0.1;"
		//对cookie的name和value编码
		var cookieTxt=encodeURI(name)+"="+encodeURI(value);
		//如果expries是时间对象的话
		/*
			a instanceof b
			判断a是否是b的实例
			d就是Date的实例
			var d=new Date();
			d instanceof Date

		*/
		if(expries instanceof Date){
			cookieTxt+=";expries="+expries;
		}
		if(domain){
			cookieTxt+=";domain="+domain;
		}
		if(path){
			cookieTxt+=";path="+path;
		}
		if(secure){
			cookieTxt+=";secure";
		}
		//console.log(cookieTxt);
		//写入cookie
		document.cookie=cookieTxt;
	}
	/*var d=new Date();
	d.setDate(d.getDate()+10)
	setCookie("level","vip",d);*/
	function getCookie(name){
		var name=encodeURI(name);
		var str=document.cookie;
		var strStart=str.indexOf(name);
		var strEnd=str.indexOf(";",strStart);
		if(strEnd==-1){
			strEnd=str.length;
		}
		return decodeURI(str.substring(strStart+name.length,strEnd));
	}
function addZero(num){
	if(num<10){
		num="0"+num;
	}
	return num;
}
/*设置localStorage*/
		function set(key,value){
			var currentTime=new Date().getTime();
			localStorage.setItem(key,JSON.stringify({"data":value,"time":currentTime}));
		}
		/*获取localStorage
		  * expire:生命周期
		*/
		function get(key,lifeTime){
			var data=localStorage.getItem(key);
			if(data){
				//把字符串data解析为对象
				var dataObj=JSON.parse(data);
				//如果过期的话
				if(new Date().getTime()-dataObj.time>lifeTime){
					localStorage.removeItem(key);
					console.log("数据已经过期");
				}else{
					return JSON.stringify(dataObj.data);
				}
			}
		}
/**
*duration:时长,单位是秒。
*feedback：显示时长的元素
*/
function timeFormat(duration=70,feedback){
	feedback.innerHTML=addZero(parseInt(duration/(60*60)))+":"+addZero((parseInt(duration/60)%60))+":"+addZero(parseInt(duration%60));
}
/**
*居中函数
*element:需要居中的元素
*/
function center(element){
	element.style.left=((getWindowSize().width-element.offsetWidth)/2+getScrollSize().left)+"px";
	element.style.top=((getWindowSize().height-element.offsetHeight)/2+getScrollSize().top)+"px";
}
/**
*获取窗口的尺寸
*不同的浏览器，窗口的尺寸计算不同
*/
function getWindowSize(){
	return {
		"width":window.innerWidth||document.documentElement.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight
	};
}
/**
* 获取滚动条滚动的值
*/
function getScrollSize(){
	return{
		"top":document.documentElement.scrollTop||document.body.scrollTop,
		"left":document.documentElement.scrollLeft||document.body.scrollLeft
	}
}
/*邮箱验证*/
function valide_email(value){
	var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9]+)?\.[a-z]{2,11}(\.[a-z]{2,4})?$/i;
	if(pattern.test(value)){
		return true;
	}else{
		return false;
	}
}
/*修剪数据前后的空格*/
function trim(value){
		//如果value中全是空格
		if(/^(\s*)$/.test(value)){
			value=value.replace(/^(\s*)$/,"");
			//如果value的前后是空格
		}else if(/^\s*(.+?)\s*$/.test(value)){
			value=value.replace(/^\s*(.+?)\s*$/,"$1");
		}
		return value;
}
function valide_pwd(value){
	var num=0;
	//value中没有数字
	if(!/[\d]/.test(value)){
		num+=1;
	}
	//小写字母
	if(!/[a-z]/.test(value)){
		num+=1;
	}
	//大写字母
	if(!/[A-Z]/.test(value)){
		num+=1;
	}
	//特殊字符
	if(!/[\W]/.test(value)){
		num+=1;
	}
	return num;
}
